/* Replace with your SQL commands */

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


SELECT pg_catalog.setval('public.candidates_id_seq', 162, true);

SELECT pg_catalog.setval('public.saved_id_seq', 32, true);

SELECT pg_catalog.setval('public.users_id_seq', 26, true);