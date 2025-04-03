#!/bin/bash
docker compose --project-directory . --file ./docker-compose.yml --project-name payload-block-error "$@"
