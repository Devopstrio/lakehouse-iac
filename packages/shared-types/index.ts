export enum DataFormat {
  DELTA = "DELTA",
  ICEBERG = "ICEBERG",
  HUDI = "HUDI",
  PARQUET = "PARQUET",
  AVRO = "AVRO"
}

export enum PipelineType {
  BATCH = "BATCH",
  STREAMING = "STREAMING"
}

export interface DatasetMetadata {
  id: string;
  name: string;
  database: string;
  owner: string;
  format: DataFormat;
  schema: Record<string, string>;
  partitionKeys: string[];
  location: string;
  isVersioned: boolean;
}

export interface PipelineRun {
  id: string;
  pipelineId: string;
  type: PipelineType;
  status: "PENDING" | "RUNNING" | "SUCCESS" | "FAILED";
  startedAt: string;
  completedAt?: string;
  processedRows?: number;
  errorMessage?: string;
}

export interface DataQualityReport {
  datasetId: string;
  timestamp: string;
  checks: {
    name: string;
    passed: boolean;
    actualValue: any;
    expectedValue: any;
  }[];
  overallScore: number;
}
