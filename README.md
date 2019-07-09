# How to use

We need to build a production worthy application for a CASE management system.

As an initial step we containerized a simple app that has a react frontend,
nodejs backend, and postgres database.

Use the following command to run the full app on your local machine.

```bash
docker-compose up -d
```

There are two urls you can visit on your browser
 * http://localhost:8080 will show you a react powered hello world page
 * http://localhost:8080/env will show you all the environment variables on the server

This demonstrates working client/server functionality.

You can use the the following command to log into the postgres database

```bash
docker-compose exec postgres psql -U postgres
```

You can test that we generated the postgres database container properly if you use the \dn 
command in the command line. 

You should see a schema named event_log. Postgres generate this schema based on the code we
have checked-in.