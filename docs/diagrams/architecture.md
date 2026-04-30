# Architecture & Governance Diagrams

## 11. Multi-Cloud Lakehouse Topology (Detailed)
*How the platform orchestrates unified data across cloud providers.*

```mermaid
graph TD
    subgraph "Lakehouse Control Plane"
        Portal[Intelligence Hub]
        Engine[Provisioning Engine]
        Catalog[Global Metastore]
    end
    subgraph "Cloud Data Planes"
        AWS[AWS: S3 + EMR]
        Azure[Azure: ADLS + Databricks]
        GCP[GCP: GCS + Dataproc]
    end
    Portal --> Engine
    Engine --> AWS
    Engine --> Azure
    Engine --> GCP
    Catalog --> AWS
    Catalog --> Azure
    Catalog --> GCP
```

## 13. "Time Travel" Query Architecture
```mermaid
graph LR
    User[Analyst] --> Query[SQL: SELECT FROM table VERSION AS OF '2023-01-01']
    Query --> Delta[Delta Log / Iceberg Metadata]
    Delta --> Snapshot[Specific Data Version]
    Snapshot --> User
```

## 20. End-to-End Data Quality Loop
```mermaid
stateDiagram-v2
    Ingest --> Validate: Schema Check
    Validate --> Transform: Pass
    Transform --> Check: Business Rule Check
    Check --> Gold: Pass
    Check --> Quarantine: Fail
    Quarantine --> Alert: Notify Data Engineer
```
