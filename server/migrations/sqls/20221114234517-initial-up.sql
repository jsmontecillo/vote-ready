/* Replace with your SQL commands */

CREATE TABLE candidates (
    id SERIAL PRIMARY KEY,
    name character varying NOT NULL,
    party character varying,
    email character varying,
    phone character varying,
    url character varying,
    facebook character varying,
    twitter character varying
);

CREATE TABLE saved (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    candidate_id integer
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    email character varying NOT NULL
);

INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (1, 'Alex Padilla', 'Democratic Party', 'info@alex-padilla.com', '(213) 342-6869', 'https://www.alex-padilla.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (132, 'AUDREY B. COLLINS', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (133, 'PATRICIA GUERRERO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (135, 'MARTIN J. JENKINS', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (136, 'JOSHUA P. GROBAN', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (137, 'FRANCES ROTHSCHILD', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (138, 'LAURENCE D. RUBIN', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (139, 'MARIA E. STRATTON', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (140, 'JUDITH M. ASHMANN', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (141, 'LUIS A. LAVIN', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (142, 'BRIAN S. CURREY', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (143, 'LAMAR W. BAKER', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (144, 'HERNALDO J. BALTODANO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (145, 'JOHN L. SEGAL', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (146, 'JOHN SHEPARD WILEY JR.', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (147, 'ELIZABETH ANNETTE GRIMES', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (148, 'KAREN A. BRAKO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (149, 'PATRICK HARE', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (150, 'MELISSA HAMMOND', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (151, 'CAROLYN "JIYOUNG" PARK', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (152, 'MELISSA LYONS', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (153, 'LESLIE GUTIERREZ', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (154, 'RENEE YOLANDE CHANG', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (155, 'HOLLY L. HANCOCK', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (156, 'FERNANDA MARIA BARRETO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (157, 'ELIZABETH LASHLEY-HAYNES', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (158, 'ABBY BARON', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (159, 'ANNA SLOTKY REITANO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (160, 'GOODWIN LIU', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (161, 'TONY VAZQUEZ', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (162, 'Y. MARIE MANVEL', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (5, 'Adam B. Schiff', 'Democratic Party', 'contact@adamschiff.com', '(818) 841-2828', 'https://www.adamschiff.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (4, 'G "Maebe A. Girl" Pudlo', 'Democratic Party', 'maebeagirl@gmail.com', NULL, 'https://maebeagirlforcongress.org/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (13, 'Gavin Newsom', 'Democratic Party', 'gavin@gavinnewsom.com', '(916) 285-5733', 'https://gavinnewsom.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (14, 'Brian Dahle', 'Republican Party', 'info@briandahle.com', '(530) 299-3223', 'https://briandahle.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (15, 'Eleni Kounalakis', 'Democratic Party', 'info@eleniforca.com', '(415) 857-0921', 'https://www.eleniforca.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (16, 'Angela E. Underwood Jacobs', 'Republican Party', 'info@angelaforcalifornia.com', '(661) 723-8281', 'https://www.angelaforcalifornia.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (17, 'Shirley N. Weber', 'Democratic Party', 'info@drshirleyweber.com', '(619) 889-5860', 'https://drshirleyweber.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (18, 'Rob Bernosky', 'Republican Party', 'rob@votebernosky.com', '(831) 801-5823', 'http://www.votebernosky.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (21, 'Malia M. Cohen', 'Democratic Party', 'info@maliacohen.us', '(415) 269-5105', 'https://maliacohen.us/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (23, 'Tony K. Thurmond', 'Nonpartisan', 'tony@tonythurmond.com', '(510) 859-3241', 'https://www.tonythurmond.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (24, 'Lance Ray Christensen', 'Nonpartisan', 'lance4supe@gmail.com', '(916) 572-8298', 'https://lancechristensen.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (25, 'Fiona Ma', 'Democratic Party', 'fiona@fionama.com', '(415) 498-0357', 'https://www.fionama.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (19, 'LANHEE J. CHEN', 'Republican Party', 'info@chenforcalifornia.com', '(650) 485-1652', 'https://chenforcalifornia.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (28, 'Ricardo Lara', 'Democratic Party', 'info@ricardolara.com', '(213) 293-9546', 'https://ricardolara.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (49, 'Alex Villanueva', 'Nonpartisan', 'info@alexvillanueva.org', NULL, 'https://alexvillanueva.org/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (27, 'Jack M. Guerrero', 'Republican Party', 'jack4council@gmail.com', '(323) 821-2670', 'https://www.jack4treasurer.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (33, 'Rob Bonta', 'Democratic Party', 'info@robbonta.com', NULL, 'https://robbonta.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (36, 'Nathan Hochman', 'Republican Party', 'info@nathanhochman.com', NULL, 'https://www.nathanhochman.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (38, 'Ben Allen', 'Democratic Party', 'info@benallenca.com', '(951) 283-0221', 'http://benallenca.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (40, 'Kristina Irwin', 'Republican Party', 'info@kristinairwin.com', '(805) 922-4881', 'https://kristinairwin.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (42, 'Louis Abramson', 'Democratic Party', 'info@louisforca.com', '(818) 392-4254', 'https://www.louisforca.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (45, 'Rick Chavez Zbur', 'Democratic Party', 'info@rickchavezzbur.com', '(916) 285-5733', 'https://www.rickchavezzbur.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (50, 'Robert Luna', 'Nonpartisan', 'campaign@lunaforsheriff.com', NULL, 'https://www.lunaforsheriff.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (54, 'Lindsey Horvath', 'Nonpartisan', 'lindsey.p.horvath@gmail.com', NULL, 'https://www.lindseyhorvath.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (58, 'Bob Hertzberg', 'Nonpartisan', 'info@hertzbergforsupervisor.com', NULL, 'https://www.hertzbergforsupervisor.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (60, 'Rick J. Caruso', 'Nonpartisan', 'info@carusocan.com', NULL, 'https://www.carusocan.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (67, 'Karen Ruth Bass', 'Nonpartisan', 'info@karenbass.com', NULL, 'https://karenbass.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (30, 'Robert Howell', 'Republican Party', 'watchdog@electroberthowell.com', '(408) 596-9869', 'https://electroberthowell.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (104, 'CHRISTINE T. LAMONICA', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (76, 'Faisal M. Gill', 'Nonpartisan', NULL, NULL, 'https://www.gillforla.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (84, 'JASON R. AULA', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (88, 'GLENN TRUJILLO BAILEY', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (92, 'STEVEN VERES', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (100, 'SARA HERNANDEZ', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (71, 'Kenneth Mejia', 'Nonpartisan', 'kenneth@mejiaforcontroller.com', NULL, 'https://mejiaforcontroller.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (75, 'Paul Koretz', 'Nonpartisan', 'koretzforla@gmail.com', NULL, 'https://www.koretzforla.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (82, 'Hydee Feldstein Soto', 'Nonpartisan', NULL, NULL, 'https://hydeeforcityattorney.com/', NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (98, 'ERNEST H. MORENO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (109, 'GABRIEL BUELNA', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (113, 'ROBERT L. PAYNE', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (118, 'KELSEY IINO', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (121, 'MARK DUTTON', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (126, 'NANCY PEARLMAN', NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO candidates (id, name, party, email, phone, url, facebook, twitter) VALUES (2, 'Mark P. Meuser', 'Republican Party', 'contact@markmeuser.com', '(209) 763-8737', 'https://www.markmeuser.com/', NULL, NULL);

INSERT INTO users (id, first_name, last_name, email) VALUES (1, 'Janice', 'Montecillo', 'jsmontecillo@gmail.com');
INSERT INTO users (id, first_name, last_name, email) VALUES (3, 'Janice', 'M', 'jmontecilloinc@gmail.com');
INSERT INTO users (id, first_name, last_name, email) VALUES (27, 'test', 'test', 'votereadytest1@gmail.com');

INSERT INTO saved (id, user_id, candidate_id) VALUES (23, 1, 71);
INSERT INTO saved (id, user_id, candidate_id) VALUES (25, 1, 1);
INSERT INTO saved (id, user_id, candidate_id) VALUES (32, 1, 45);
INSERT INTO saved (id, user_id, candidate_id) VALUES (33, 3, 67);
INSERT INTO saved (id, user_id, candidate_id) VALUES (52, 3, 42);
INSERT INTO saved (id, user_id, candidate_id) VALUES (53, 3, 45);
INSERT INTO saved (id, user_id, candidate_id) VALUES (54, 3, 54);
INSERT INTO saved (id, user_id, candidate_id) VALUES (56, 3, 49);
INSERT INTO saved (id, user_id, candidate_id) VALUES (57, 3, 50);
INSERT INTO saved (id, user_id, candidate_id) VALUES (58, 3, 152);
INSERT INTO saved (id, user_id, candidate_id) VALUES (59, 3, 25);
INSERT INTO saved (id, user_id, candidate_id) VALUES (60, 3, 33);
INSERT INTO saved (id, user_id, candidate_id) VALUES (61, 3, 36);
INSERT INTO saved (id, user_id, candidate_id) VALUES (62, 3, 27);
INSERT INTO saved (id, user_id, candidate_id) VALUES (64, 3, 28);
INSERT INTO saved (id, user_id, candidate_id) VALUES (67, 3, 100);
INSERT INTO saved (id, user_id, candidate_id) VALUES (69, 3, 84);
INSERT INTO saved (id, user_id, candidate_id) VALUES (72, 3, 92);
INSERT INTO saved (id, user_id, candidate_id) VALUES (73, 27, 76);
INSERT INTO saved (id, user_id, candidate_id) VALUES (74, 27, 71);
INSERT INTO saved (id, user_id, candidate_id) VALUES (75, 27, 92);
INSERT INTO saved (id, user_id, candidate_id) VALUES (76, 27, 100);


SELECT pg_catalog.setval('candidates_id_seq', 162, true);

SELECT pg_catalog.setval('saved_id_seq', 32, true);

SELECT pg_catalog.setval('users_id_seq', 26, true);