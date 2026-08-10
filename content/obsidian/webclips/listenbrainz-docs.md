---
title: "ListenBrainz documentation — ListenBrainz 0.1.0 documentation"
source: https://listenbrainz.readthedocs.io/en/latest/
created: 2026-03-26
tags:
  - new-clippings
kind: obsidian-clipper
---
## ListenBrainz documentation

ListenBrainz is a project by the MetaBrainz foundation which allows you to publicly store a record of all of the songs that you listen to. Using this data, we provide statistics, recommendations, and a platform for you and other developers to explore this data.

If you want to use the ListenBrainz API to read or submit data, see the [API documentation](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html). You also may want to review the JSON documentation.

If you are interested in contributing to ListenBrainz as a developer, see the [Developer documentation.](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html)

We also publish some maintainer documentation, which is used by the MetaBrainz team to run the ListenBrainz site.

## Contents

API Documentation

- [ListenBrainz API](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html)
	- [Authentication](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html#authentication)
		- [Reference](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html#reference)
		- [OpenAPI specification](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html#openapi-specification)
		- [Rate limiting](https://listenbrainz.readthedocs.io/en/latest/users/api/index.html#rate-limiting)
- [Usage Examples](https://listenbrainz.readthedocs.io/en/latest/users/api-usage.html)
	- [Prerequisites](https://listenbrainz.readthedocs.io/en/latest/users/api-usage.html#prerequisites)
		- [Examples](https://listenbrainz.readthedocs.io/en/latest/users/api-usage.html#examples)
- [JSON Documentation](https://listenbrainz.readthedocs.io/en/latest/users/json.html)
	- [Submission JSON](https://listenbrainz.readthedocs.io/en/latest/users/json.html#submission-json)
		- [Fetching listen JSON](https://listenbrainz.readthedocs.io/en/latest/users/json.html#fetching-listen-json)
		- [Payload JSON details](https://listenbrainz.readthedocs.io/en/latest/users/json.html#payload-json-details)
		- [Client Metadata examples](https://listenbrainz.readthedocs.io/en/latest/users/json.html#client-metadata-examples)
- [Embeddable widgets](https://listenbrainz.readthedocs.io/en/latest/users/widgets.html)
	- [Playing Now Widget](https://listenbrainz.readthedocs.io/en/latest/users/widgets.html#playing-now-widget)
		- [Pin Widget](https://listenbrainz.readthedocs.io/en/latest/users/widgets.html#pin-widget)
- [Client Libraries](https://listenbrainz.readthedocs.io/en/latest/users/clients.html)
	- [Haskell](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#haskell)
		- [Go](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#go)
		- [Rust](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#rust)
		- [.NET](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#net)
		- [Python](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#python)
		- [Java](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#java)
		- [Swift](https://listenbrainz.readthedocs.io/en/latest/users/clients.html#swift)
- [Last.FM Compatible API for ListenBrainz](https://listenbrainz.readthedocs.io/en/latest/users/api-compat.html)
	- [AudioScrobbler API v1.2](https://listenbrainz.readthedocs.io/en/latest/users/api-compat.html#audioscrobbler-api-v1-2)
		- [Last.FM API](https://listenbrainz.readthedocs.io/en/latest/users/api-compat.html#last-fm-api)
- [Data Dumps](https://listenbrainz.readthedocs.io/en/latest/users/listenbrainz-dumps.html)
	- [Dump mirrors](https://listenbrainz.readthedocs.io/en/latest/users/listenbrainz-dumps.html#dump-mirrors)
		- [File Descriptions](https://listenbrainz.readthedocs.io/en/latest/users/listenbrainz-dumps.html#file-descriptions)
		- [Structure of the listens dump](https://listenbrainz.readthedocs.io/en/latest/users/listenbrainz-dumps.html#structure-of-the-listens-dump)
		- [Incremental dumps](https://listenbrainz.readthedocs.io/en/latest/users/listenbrainz-dumps.html#incremental-dumps)

ListenBrainz Data Update Intervals

- [ListenBrainz Data Update Intervals](https://listenbrainz.readthedocs.io/en/latest/general/data-update-intervals.html)
	- [Listens and Listen Counts](https://listenbrainz.readthedocs.io/en/latest/general/data-update-intervals.html#listens-and-listen-counts)
		- [User Statistics](https://listenbrainz.readthedocs.io/en/latest/general/data-update-intervals.html#user-statistics)
		- [MBID Mapper & MusicBrainz Metadata Cache](https://listenbrainz.readthedocs.io/en/latest/general/data-update-intervals.html#mbid-mapper-musicbrainz-metadata-cache)
		- [ListenBrainz data infrastructure](https://listenbrainz.readthedocs.io/en/latest/general/data-update-intervals.html#listenbrainz-data-infrastructure)

Developer Documentation

- [Server development](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html)
	- [Set up ListenBrainz Server development environment](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#set-up-listenbrainz-server-development-environment)
		- [Clone listenbrainz-server](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#clone-listenbrainz-server)
		- [Install docker](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#install-docker)
		- [Register a MusicBrainz application](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#register-a-musicbrainz-application)
		- [Initialize ListenBrainz containers](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#initialize-listenbrainz-containers)
		- [Initialize ListenBrainz databases](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#initialize-listenbrainz-databases)
		- [Run the magic script](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#run-the-magic-script)
		- [Listenbrainz containers](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#listenbrainz-containers)
		- [Test your changes with unit tests](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#test-your-changes-with-unit-tests)
		- [Lint your code](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#lint-your-code)
		- [Using develop.sh](https://listenbrainz.readthedocs.io/en/latest/developers/devel-env.html#using-develop-sh)
- [Spark development](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html)
	- [Set up the webserver](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#set-up-the-webserver)
		- [Initialize ListenBrainz Spark containers](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#initialize-listenbrainz-spark-containers)
		- [Bring containers up](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#bring-containers-up)
		- [Import data into the spark environment](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#import-data-into-the-spark-environment)
		- [Working with request\_consumer](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#working-with-request-consumer)
		- [Test your changes with unit tests](https://listenbrainz.readthedocs.io/en/latest/developers/spark-devel-env.html#test-your-changes-with-unit-tests)
- [Architecture](https://listenbrainz.readthedocs.io/en/latest/developers/architecture.html)
	- [Services](https://listenbrainz.readthedocs.io/en/latest/developers/architecture.html#services)
		- [Listen Flow](https://listenbrainz.readthedocs.io/en/latest/developers/architecture.html#listen-flow)
		- [Frontend Rendering](https://listenbrainz.readthedocs.io/en/latest/developers/architecture.html#frontend-rendering)
- [Spark Architecture](https://listenbrainz.readthedocs.io/en/latest/developers/spark-architecture.html)
	- [Developing request\_consumer](https://listenbrainz.readthedocs.io/en/latest/developers/spark-architecture.html#developing-request-consumer)
- [MBID Mapping](https://listenbrainz.readthedocs.io/en/latest/developers/mapping.html)
	- [Database tables](https://listenbrainz.readthedocs.io/en/latest/developers/mapping.html#database-tables)
		- [Fuzzy lookups](https://listenbrainz.readthedocs.io/en/latest/developers/mapping.html#fuzzy-lookups)
		- [MBID Mapper](https://listenbrainz.readthedocs.io/en/latest/developers/mapping.html#mbid-mapper)
- [Scripts](https://listenbrainz.readthedocs.io/en/latest/developers/commands.html)
- [Troubleshooting](https://listenbrainz.readthedocs.io/en/latest/developers/troubleshooting.html)
	- [Docker Installations](https://listenbrainz.readthedocs.io/en/latest/developers/troubleshooting.html#docker-installations)

Maintainer Documentation

- [Production Deployment](https://listenbrainz.readthedocs.io/en/latest/maintainers/deploy.html)
	- [Cron](https://listenbrainz.readthedocs.io/en/latest/maintainers/deploy.html#cron)
- [Building Docker Images](https://listenbrainz.readthedocs.io/en/latest/maintainers/docker-image.html)
- [Data Dumps](https://listenbrainz.readthedocs.io/en/latest/maintainers/dumps.html)
- [MBID Mapping](https://listenbrainz.readthedocs.io/en/latest/maintainers/mapping.html)
- [Debugging Spotify Reader](https://listenbrainz.readthedocs.io/en/latest/maintainers/spotify-reader.html)
- [RabbitMQ](https://listenbrainz.readthedocs.io/en/latest/maintainers/rabbitmq.html)
- [Updating Production Database Schema](https://listenbrainz.readthedocs.io/en/latest/maintainers/updating-prod-db-schema.html)
- [Pull Requests Policy](https://listenbrainz.readthedocs.io/en/latest/maintainers/pull-requests.html)
