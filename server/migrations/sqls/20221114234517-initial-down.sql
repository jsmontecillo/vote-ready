/* Replace with your SQL commands */

DROP TABLE users;
DROP TABLE candidates;
DROP TABLE saved;

CREATE TABLE public.candidates (
    id SERIAL PRIMARY KEY,
    name character varying NOT NULL,
    party character varying,
    email character varying,
    phone character varying,
    url character varying,
    facebook character varying,
    twitter character varying
);

CREATE TABLE public.saved (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    candidate_id integer
);

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL
);
