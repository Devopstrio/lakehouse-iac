resource "aws_emr_cluster" "spark_compute" {
  name          = "lakehouse-spark-cluster-${var.env}"
  release_label = "emr-6.10.0"
  service_role  = var.emr_service_role

  applications = ["Spark", "Hadoop", "Hive", "Presto"]

  ec2_attributes {
    subnet_id                         = var.subnet_id
    emr_managed_master_security_group = var.master_security_group
    emr_managed_slave_security_group  = var.slave_security_group
    instance_profile                  = var.emr_ec2_instance_profile
  }

  master_instance_group {
    instance_type = "m5.xlarge"
  }

  core_instance_group {
    instance_type  = "m5.xlarge"
    instance_count = 2

    ebs_config {
      size                 = "50"
      type                 = "gp2"
      volumes_per_instance = 1
    }
  }

  configurations_json = <<EOF
  [
    {
      "Classification": "spark",
      "Properties": {
        "maximizeResourceAllocation": "true"
      }
    }
  ]
EOF
}
