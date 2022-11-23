--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5 (Homebrew)
-- Dumped by pg_dump version 14.5 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
ALTER TABLE ONLY public.saved DROP CONSTRAINT saved_pkey;
ALTER TABLE ONLY public.candidates DROP CONSTRAINT candidates_pkey;
ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.saved ALTER COLUMN id DROP DEFAULT;
ALTER TABLE public.candidates ALTER COLUMN id DROP DEFAULT;
DROP SEQUENCE public.users_id_seq;
DROP TABLE public.users;
DROP SEQUENCE public.saved_id_seq;
DROP TABLE public.saved;
DROP SEQUENCE public.candidates_id_seq;
DROP TABLE public.candidates;
SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: candidates; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.candidates (
    id integer NOT NULL,
    name character varying NOT NULL,
    party character varying,
    email character varying,
    phone character varying,
    url character varying,
    facebook character varying,
    twitter character varying,
    image character varying
);


--
-- Name: candidates_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.candidates_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: candidates_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.candidates_id_seq OWNED BY public.candidates.id;


--
-- Name: saved; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.saved (
    id integer NOT NULL,
    user_id integer NOT NULL,
    candidate_id integer
);


--
-- Name: saved_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.saved_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: saved_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.saved_id_seq OWNED BY public.saved.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: candidates id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.candidates ALTER COLUMN id SET DEFAULT nextval('public.candidates_id_seq'::regclass);


--
-- Name: saved id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.saved ALTER COLUMN id SET DEFAULT nextval('public.saved_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: candidates; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.candidates VALUES (161, 'TONY VAZQUEZ', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/SX7ppN7/vasquez.png');
INSERT INTO public.candidates VALUES (162, 'Y. MARIE MANVEL', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/VjC2JzZ/manvel.png');
INSERT INTO public.candidates VALUES (160, 'GOODWIN LIU', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidates VALUES (1, 'Alex Padilla', 'Democratic Party', 'info@alex-padilla.com', '(213) 342-6869', 'https://www.alex-padilla.com/', NULL, NULL, 'https://i.ibb.co/3S8N0Lc/padilla.png');
INSERT INTO public.candidates VALUES (132, 'AUDREY B. COLLINS', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/jTHVm37/collins.png');
INSERT INTO public.candidates VALUES (133, 'PATRICIA GUERRERO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/zfhvpxN/guerrero2.png');
INSERT INTO public.candidates VALUES (135, 'MARTIN J. JENKINS', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/YyrF4T3/jenkins.png');
INSERT INTO public.candidates VALUES (136, 'JOSHUA P. GROBAN', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/t2DRWHJ/groban.png');
INSERT INTO public.candidates VALUES (137, 'FRANCES ROTHSCHILD', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Hz2WRVh/rothschild.png');
INSERT INTO public.candidates VALUES (138, 'LAURENCE D. RUBIN', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/jDd0Cc5/rubin.png');
INSERT INTO public.candidates VALUES (139, 'MARIA E. STRATTON', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Qnnt6Rs/stratton.png');
INSERT INTO public.candidates VALUES (140, 'JUDITH M. ASHMANN', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/N1K4Sdn/ashmann.png');
INSERT INTO public.candidates VALUES (141, 'LUIS A. LAVIN', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Bq2LVq6/lavin.png');
INSERT INTO public.candidates VALUES (142, 'BRIAN S. CURREY', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Zgy1W3t/currey.png');
INSERT INTO public.candidates VALUES (143, 'LAMAR W. BAKER', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/frP3m8c/baker.png');
INSERT INTO public.candidates VALUES (144, 'HERNALDO J. BALTODANO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/CtLnBWf/baltodano.png');
INSERT INTO public.candidates VALUES (145, 'JOHN L. SEGAL', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/nCnP4Sc/segal.png');
INSERT INTO public.candidates VALUES (146, 'JOHN SHEPARD WILEY JR.', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/djyZ8MM/wiley.png');
INSERT INTO public.candidates VALUES (147, 'ELIZABETH ANNETTE GRIMES', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/L5dbgPK/grimes.png');
INSERT INTO public.candidates VALUES (148, 'KAREN A. BRAKO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/8mJbqVg/brako.png');
INSERT INTO public.candidates VALUES (149, 'PATRICK HARE', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/dKFLmp1/hare.png');
INSERT INTO public.candidates VALUES (150, 'MELISSA HAMMOND', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/9y7n8wH/hammond.png');
INSERT INTO public.candidates VALUES (151, 'CAROLYN "JIYOUNG" PARK', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Vmqd97p/park.png');
INSERT INTO public.candidates VALUES (152, 'MELISSA LYONS', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/b1ff8gN/lyons.png');
INSERT INTO public.candidates VALUES (153, 'LESLIE GUTIERREZ', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/1ZrZvyL/gutierrez.png');
INSERT INTO public.candidates VALUES (154, 'RENEE YOLANDE CHANG', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/n3DNVtq/chang.png');
INSERT INTO public.candidates VALUES (155, 'HOLLY L. HANCOCK', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/NnNzzw6/hancock.png');
INSERT INTO public.candidates VALUES (156, 'FERNANDA MARIA BARRETO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/khx7RwJ/barreto.png');
INSERT INTO public.candidates VALUES (157, 'ELIZABETH LASHLEY-HAYNES', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/JK7CHp5/haynes.png');
INSERT INTO public.candidates VALUES (158, 'ABBY BARON', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/BwDPNmq/baron.png');
INSERT INTO public.candidates VALUES (159, 'ANNA SLOTKY REITANO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/bgd0dWD/reitano.png');
INSERT INTO public.candidates VALUES (5, 'Adam B. Schiff', 'Democratic Party', 'contact@adamschiff.com', '(818) 841-2828', 'https://www.adamschiff.com/', NULL, NULL, 'https://i.ibb.co/NFCjP68/schiff.png');
INSERT INTO public.candidates VALUES (4, 'G "Maebe A. Girl" Pudlo', 'Democratic Party', 'maebeagirl@gmail.com', NULL, 'https://maebeagirlforcongress.org/', NULL, NULL, 'https://i.ibb.co/2K4Hfd9/pudlo.png');
INSERT INTO public.candidates VALUES (13, 'Gavin Newsom', 'Democratic Party', 'gavin@gavinnewsom.com', '(916) 285-5733', 'https://gavinnewsom.com/', NULL, NULL, 'https://post.ca.gov/portals/0/post_images/homepageleaders/GavinNewsom350x515.png?ver=2019-08-28-124939-207');
INSERT INTO public.candidates VALUES (14, 'Brian Dahle', 'Republican Party', 'info@briandahle.com', '(530) 299-3223', 'https://briandahle.com/', NULL, NULL, 'https://i.ibb.co/xfmxjMR/dahle.png');
INSERT INTO public.candidates VALUES (49, 'Alex Villanueva', 'Nonpartisan', 'info@alexvillanueva.org', NULL, 'https://alexvillanueva.org/', NULL, NULL, 'https://i.ibb.co/kQhqryd/villanueva.png');
INSERT INTO public.candidates VALUES (15, 'Eleni Kounalakis', 'Democratic Party', 'info@eleniforca.com', '(415) 857-0921', 'https://www.eleniforca.com/', NULL, NULL, 'https://i.ibb.co/9gy1s7x/koulanakis.png');
INSERT INTO public.candidates VALUES (16, 'Angela E. Underwood Jacobs', 'Republican Party', 'info@angelaforcalifornia.com', '(661) 723-8281', 'https://www.angelaforcalifornia.com/', NULL, NULL, 'https://i.ibb.co/M52TLj8/jacobs.png');
INSERT INTO public.candidates VALUES (17, 'Shirley N. Weber', 'Democratic Party', 'info@drshirleyweber.com', '(619) 889-5860', 'https://drshirleyweber.com/', NULL, NULL, 'https://i.ibb.co/X4Qxb0W/weber.png');
INSERT INTO public.candidates VALUES (18, 'Rob Bernosky', 'Republican Party', 'rob@votebernosky.com', '(831) 801-5823', 'http://www.votebernosky.com/', NULL, NULL, 'https://i.ibb.co/fpYzcBg/bernosky.png');
INSERT INTO public.candidates VALUES (19, 'LANHEE J. CHEN', 'Republican Party', 'info@chenforcalifornia.com', '(650) 485-1652', 'https://chenforcalifornia.com/', NULL, NULL, 'https://i.ibb.co/WtVPzdS/chen.png');
INSERT INTO public.candidates VALUES (21, 'Malia M. Cohen', 'Democratic Party', 'info@maliacohen.us', '(415) 269-5105', 'https://maliacohen.us/', NULL, NULL, 'https://i.ibb.co/DwyC3xK/cohen.png');
INSERT INTO public.candidates VALUES (23, 'Tony K. Thurmond', 'Nonpartisan', 'tony@tonythurmond.com', '(510) 859-3241', 'https://www.tonythurmond.com/', NULL, NULL, 'https://i.ibb.co/3fHvm2Z/thurmond.png');
INSERT INTO public.candidates VALUES (24, 'Lance Ray Christensen', 'Nonpartisan', 'lance4supe@gmail.com', '(916) 572-8298', 'https://lancechristensen.com/', NULL, NULL, 'https://i.ibb.co/sFvrfGZ/christensen.png');
INSERT INTO public.candidates VALUES (25, 'Fiona Ma', 'Democratic Party', 'fiona@fionama.com', '(415) 498-0357', 'https://www.fionama.com/', NULL, NULL, 'https://i.ibb.co/wYX1HPr/ma.png');
INSERT INTO public.candidates VALUES (28, 'Ricardo Lara', 'Democratic Party', 'info@ricardolara.com', '(213) 293-9546', 'https://ricardolara.com/', NULL, NULL, 'https://i.ibb.co/bdq8tNG/lara.png');
INSERT INTO public.candidates VALUES (67, 'Karen Ruth Bass', 'Nonpartisan', 'info@karenbass.com', NULL, 'https://karenbass.com/', NULL, NULL, 'https://i.ibb.co/19k1jxj/bass.png');
INSERT INTO public.candidates VALUES (60, 'Rick J. Caruso', 'Nonpartisan', 'info@carusocan.com', NULL, 'https://www.carusocan.com/', NULL, NULL, 'https://i.ibb.co/8DtR6bK/caruso.png');
INSERT INTO public.candidates VALUES (40, 'Kristina Irwin', 'Republican Party', 'info@kristinairwin.com', '(805) 922-4881', 'https://kristinairwin.com/', NULL, NULL, 'https://i.ibb.co/h93F8bY/irwin.png');
INSERT INTO public.candidates VALUES (38, 'Ben Allen', 'Democratic Party', 'info@benallenca.com', '(951) 283-0221', 'http://benallenca.com/', NULL, NULL, 'https://i.ibb.co/XWJLF3G/allen.png');
INSERT INTO public.candidates VALUES (42, 'Louis Abramson', 'Democratic Party', 'info@louisforca.com', '(818) 392-4254', 'https://www.louisforca.com/', NULL, NULL, 'https://i.ibb.co/GQJK4Tx/abramson.png');
INSERT INTO public.candidates VALUES (45, 'Rick Chavez Zbur', 'Democratic Party', 'info@rickchavezzbur.com', '(916) 285-5733', 'https://www.rickchavezzbur.com/', NULL, NULL, 'https://i.ibb.co/89grv8L/zbur.png');
INSERT INTO public.candidates VALUES (54, 'Lindsey Horvath', 'Nonpartisan', 'lindsey.p.horvath@gmail.com', NULL, 'https://www.lindseyhorvath.com/', NULL, NULL, 'https://i.ibb.co/nQVgGrb/horvath.png');
INSERT INTO public.candidates VALUES (58, 'Bob Hertzberg', 'Nonpartisan', 'info@hertzbergforsupervisor.com', NULL, 'https://www.hertzbergforsupervisor.com/', NULL, NULL, 'https://i.ibb.co/4TQDfCy/hertzberg.png');
INSERT INTO public.candidates VALUES (50, 'Robert Luna', 'Nonpartisan', 'campaign@lunaforsheriff.com', NULL, 'https://www.lunaforsheriff.com/', NULL, NULL, 'https://i.ibb.co/PT9Brqr/luna.png');
INSERT INTO public.candidates VALUES (33, 'Rob Bonta', 'Democratic Party', 'info@robbonta.com', NULL, 'https://robbonta.com/', NULL, NULL, 'https://i.ibb.co/bXHwycs/bona2.png');
INSERT INTO public.candidates VALUES (36, 'Nathan Hochman', 'Republican Party', 'info@nathanhochman.com', NULL, 'https://www.nathanhochman.com/', NULL, NULL, 'https://i.ibb.co/ccNYyk7/hochman.png');
INSERT INTO public.candidates VALUES (27, 'Jack M. Guerrero', 'Republican Party', 'jack4council@gmail.com', '(323) 821-2670', 'https://www.jack4treasurer.com/', NULL, NULL, 'https://i.ibb.co/m6Kfk0V/guerrero.png');
INSERT INTO public.candidates VALUES (104, 'CHRISTINE T. LAMONICA', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Tmtbh4v/lamonica.png');
INSERT INTO public.candidates VALUES (30, 'Robert Howell', 'Republican Party', 'watchdog@electroberthowell.com', '(408) 596-9869', 'https://electroberthowell.com/', NULL, NULL, 'https://i.ibb.co/Kb9vvTh/howell.png');
INSERT INTO public.candidates VALUES (76, 'Faisal M. Gill', 'Nonpartisan', NULL, NULL, 'https://www.gillforla.com/', NULL, NULL, 'https://i.ibb.co/wSWVd6V/gill.png');
INSERT INTO public.candidates VALUES (84, 'JASON R. AULA', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/Rjryt2W/aula.png');
INSERT INTO public.candidates VALUES (92, 'STEVEN VERES', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/HzVmdgX/veres.png');
INSERT INTO public.candidates VALUES (100, 'SARA HERNANDEZ', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/1nNkdxp/hernandez.png');
INSERT INTO public.candidates VALUES (88, 'GLENN TRUJILLO BAILEY', NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO public.candidates VALUES (82, 'Hydee Feldstein Soto', 'Nonpartisan', NULL, NULL, 'https://hydeeforcityattorney.com/', NULL, NULL, 'https://i.ibb.co/KxyGkyV/soto.png');
INSERT INTO public.candidates VALUES (71, 'Kenneth Mejia', 'Nonpartisan', 'kenneth@mejiaforcontroller.com', NULL, 'https://mejiaforcontroller.com/', NULL, NULL, 'https://i.ibb.co/mCB08z9/mejia.png');
INSERT INTO public.candidates VALUES (75, 'Paul Koretz', 'Nonpartisan', 'koretzforla@gmail.com', NULL, 'https://www.koretzforla.com/', NULL, NULL, 'https://i.ibb.co/vcqr4P9/koretz.png');
INSERT INTO public.candidates VALUES (98, 'ERNEST H. MORENO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/GWPjC3q/moreno.png');
INSERT INTO public.candidates VALUES (109, 'GABRIEL BUELNA', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/R2hJmkp/buelna.png');
INSERT INTO public.candidates VALUES (113, 'ROBERT L. PAYNE', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/0XhByf8/payne.png');
INSERT INTO public.candidates VALUES (118, 'KELSEY IINO', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/WBRwS0Q/iino.png');
INSERT INTO public.candidates VALUES (121, 'MARK DUTTON', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/df3Hh0Q/dutton.png');
INSERT INTO public.candidates VALUES (126, 'NANCY PEARLMAN', NULL, NULL, NULL, NULL, NULL, NULL, 'https://i.ibb.co/s1GGDPh/pearlman.png');
INSERT INTO public.candidates VALUES (2, 'Mark P. Meuser', 'Republican Party', 'contact@markmeuser.com', '(209) 763-8737', 'https://www.markmeuser.com/', NULL, NULL, NULL);


--
-- Data for Name: saved; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.saved VALUES (23, 1, 71);
INSERT INTO public.saved VALUES (25, 1, 1);
INSERT INTO public.saved VALUES (32, 1, 45);
INSERT INTO public.saved VALUES (33, 3, 67);
INSERT INTO public.saved VALUES (52, 3, 42);
INSERT INTO public.saved VALUES (53, 3, 45);
INSERT INTO public.saved VALUES (54, 3, 54);
INSERT INTO public.saved VALUES (56, 3, 49);
INSERT INTO public.saved VALUES (57, 3, 50);
INSERT INTO public.saved VALUES (58, 3, 152);
INSERT INTO public.saved VALUES (59, 3, 25);
INSERT INTO public.saved VALUES (60, 3, 33);
INSERT INTO public.saved VALUES (61, 3, 36);
INSERT INTO public.saved VALUES (62, 3, 27);
INSERT INTO public.saved VALUES (64, 3, 28);
INSERT INTO public.saved VALUES (67, 3, 100);
INSERT INTO public.saved VALUES (69, 3, 84);
INSERT INTO public.saved VALUES (72, 3, 92);
INSERT INTO public.saved VALUES (73, 27, 76);
INSERT INTO public.saved VALUES (74, 27, 71);
INSERT INTO public.saved VALUES (75, 27, 92);
INSERT INTO public.saved VALUES (76, 27, 100);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Janice', 'Montecillo', 'jsmontecillo@gmail.com');
INSERT INTO public.users VALUES (3, 'Janice', 'M', 'jmontecilloinc@gmail.com');
INSERT INTO public.users VALUES (27, 'test', 'test', 'votereadytest1@gmail.com');


--
-- Name: candidates_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.candidates_id_seq', 162, true);


--
-- Name: saved_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.saved_id_seq', 76, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 27, true);


--
-- Name: candidates candidates_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.candidates
    ADD CONSTRAINT candidates_pkey PRIMARY KEY (id);


--
-- Name: saved saved_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.saved
    ADD CONSTRAINT saved_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

