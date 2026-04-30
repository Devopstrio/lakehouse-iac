resource "aws_s3_bucket" "lakehouse_bronze" {
  bucket = "devopstrio-lakehouse-bronze-${var.env}"
}

resource "aws_s3_bucket" "lakehouse_silver" {
  bucket = "devopstrio-lakehouse-silver-${var.env}"
}

resource "aws_s3_bucket" "lakehouse_gold" {
  bucket = "devopstrio-lakehouse-gold-${var.env}"
}

resource "aws_s3_bucket_public_access_block" "lakehouse_bronze_privacy" {
  bucket = aws_s3_bucket.lakehouse_bronze.id
  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_versioning" "lakehouse_gold_versioning" {
  bucket = aws_s3_bucket.lakehouse_gold.id
  versioning_configuration {
    status = "Enabled"
  }
}
