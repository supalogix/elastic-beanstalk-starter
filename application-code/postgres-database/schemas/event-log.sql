CREATE SCHEMA IF NOT EXISTS event_log;

CREATE TABLE IF NOT EXISTS event_log.main_app(
	aggregateId UUID UNIQUE NOT NULL,
	aggregateVersion INTEGER NOT NULL,
	eventId UUID UNIQUE NOT NULL,
	nextEventId UUID UNIQUE NOT NULL,
	previousEventId UUID,
	correlationId UUID NOT NULL,
	causationId UUID NOT NULL,
	eventName VARCHAR(32),
	creationTime DATE,
	payload JSON
);