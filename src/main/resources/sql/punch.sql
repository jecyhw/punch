-- Database: punch

-- DROP DATABASE punch;

CREATE DATABASE punch
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Chinese (Simplified)_People''s Republic of China.936'
    LC_CTYPE = 'Chinese (Simplified)_People''s Republic of China.936'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public."user"

-- DROP TABLE public."user";

CREATE TABLE public."user"
(
    email character varying(100) COLLATE pg_catalog."default" NOT NULL,
    id integer NOT NULL,
    pwd character varying(100) COLLATE pg_catalog."default",
    auto_work boolean,
    send_email boolean,
    CONSTRAINT user_pkey PRIMARY KEY (id),
    CONSTRAINT uniq_email UNIQUE (email)
)
WITH (
OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."user"
    OWNER to postgres;

COMMENT ON COLUMN public."user".auto_work
IS '是否自动打卡';


-- Table: public.work_day

-- DROP TABLE public.work_day;

CREATE TABLE public.work_day
(
    day integer NOT NULL,
    CONSTRAINT work_day_pkey PRIMARY KEY (day)
)
WITH (
OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.work_day
    OWNER to postgres;
