.PHONY: help build up down test lint migrate ingest-data process-data validate-data deploy-infra

help:
	@echo "Lakehouse IaC Platform - Management Commands"
	@echo "------------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "ingest-data     : Trigger metadata-driven data ingestion"
	@echo "process-data    : Execute Spark processing and transformations"
	@echo "validate-data   : Perform data quality and schema validation"
	@echo "deploy-infra    : Provision lakehouse infrastructure via Terraform"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	pytest tests/data
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-data:
	docker-compose exec api python scripts/ingest/trigger_pipeline.py

process-data:
	docker-compose exec api python scripts/process/run_spark_job.py

validate-data:
	docker-compose exec api python scripts/validate/check_quality.py

deploy-infra:
	cd infrastructure/terraform/envs/dev && terraform apply -auto-approve
