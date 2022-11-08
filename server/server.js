const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');

const app = express();
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8888;
app.use(cors());
app.use(express.json());

// creates an endpoint for the route /api
app.get('/', (req, res) => {
  //res.json({ message: 'Hello from My template ExpressJS' });
  res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});


// create the POST request
// app.post('/api/students', cors(), async (req, res) => {
//   const newUser = {
//     firstname: req.body.firstname,
//     lastname: req.body.lastname,
//   };
//   console.log([newUser.firstname, newUser.lastname]);
//   const result = await db.query(
//     'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
//     [newUser.firstname, newUser.lastname],
//   );
//   console.log(result.rows[0]);
//   res.json(result.rows[0]);
// });

//adding new users from auth0 - done
app.post('/api/me', cors(), async (req, res) => {
  console.log(req.body);
  const newUser = {
    last_name: req.body.family_name,
    first_name: req.body.given_name,
    email: req.body.email
  }
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.rows[0].email.length > 0) {
    console.log(`Thank you ${resultsEmail.rows[0].first_name} for coming back.`)
  } else {
    console.log('This email does not exist.')
    const query = 'INSERT INTO users(last_name, first_name, email) VALUES($1, $2, $3) RETURNING *'
    const values = [newUser.last_name, newUser.first_name, newUser.email]
    const result = await db.query(query, values);
    console.log('result', result)}
});

//adding new candidates from api - not done
app.post('/api/candidate', cors(), async (req, res) => {
  console.log(req.body);
  const newCandidate = {
    name: req.body.name,
    party: req.body.party,
    email: req.body.email,
    phone: req.body.phone,
    url: req.body.url,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
  }
  const queryName = 'SELECT * FROM candidates WHERE name=$1 LIMIT 1';
  const valuesName = [newCandidate.name];
  const resultsName = await db.query(queryName, valuesName);
  if (resultsName.rows[0].name.length > 0) {
    console.log(`Already Exists`)
  } else {
    console.log('adding candidate...');
    // const query = 'INSERT INTO candidates(name, party, email, phone, url, facebook, twitter) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *'
    // const values = [newCandidate.name, newCandidate.party, newCandidate.email, newCandidate.phone, newCandidate.url, newCandidate.facebook, newCandidate.twitter]
    // const result = await db.query(query, values);
    // res.json(result.rows[0]);
    // console.log('result candidates', result);
  }});

  app.get('/api/candidate', cors(), async (req, res) => {
    try {
      const { rows: candidates } = await db.query('SELECT * FROM candidates');
      res.send(candidates);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });

// //A put request - Update a student 
// app.put('/api/students/:studentId', cors(), async (req, res) =>{
//   console.log(req.params);
//   //This will be the id that I want to find in the DB - the student to be updated
//   const studentId = req.params.studentId
//   const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname}
//   console.log("In the server from the url - the student id", studentId);
//   console.log("In the server, from the react - the student to be edited", updatedStudent);
//   // UPDATE students SET lastname = "something" WHERE id="16";
//   const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id=${studentId} RETURNING *`;
//   const values = [updatedStudent.lastname, updatedStudent.firstname];
//   try {
//     const updated = await db.query(query, values);
//     console.log(updated.rows[0]);
//     res.send(updated.rows[0]);

//   }catch(e){
//     console.log(e);
//     return res.status(400).json({e})
//   }
// });

// // delete request
// app.delete('/api/students/:studentId', cors(), async (req, res) =>{
//   const studentId = req.params.studentId;
//   //console.log("From the delete request-url", req.params);
//   await db.query('DELETE FROM students WHERE id=$1', [studentId]);
//   res.status(200).end();

// });

// all election info

app.get("/election", (req,res) => {
  //const address = req.params.favorite;
  const apiKey = process.env.REACT_API_KEY;
  const params = new URLSearchParams({
      address: "7285 Franklin Ave Los Angeles CA 90046",
      key: apiKey,
  });
  const url = `https://www.googleapis.com/civicinfo/v2/voterinfo?${params}`; 
  console.log(url);
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
       res.send(data);
   })
   .catch((err) => {
       console.log(err);
   });
});

//saving candidates
app.post('/api/saved/:id', cors(), async (req, res) => {
  const newSaved = {
    user_id: req.body.user_id,
    candidate_id: req.body.candidate_id,
  };
  const result = await db.query(
    'INSERT INTO saved(email, candidate_id) VALUES($1, $2) RETURNING *',
    [newSaved.user_id, newSaved.candidate_id],
  );
  console.log(result.rows[0]);
  res.json(result.rows[0]);
});


//get request for favorites with junction table, saved table, candidates table, and users table
app.get('/api/saved/:id', cors(), async (req, res) => {
  const user_id = req.params.id;
  try {
    const { rows: saved } = await db.query('SELECT candidates.* FROM candidates INNER JOIN saved ON candidates.name=saved.candidates_id WHERE saved.user_id=$1', [user_id]);
    res.send(saved);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//delete request
app.delete(`/api/saved/:id`, cors(), async(req,res) => {
  const savedId = req.params.id;
  await db.query('DELETE FROM saved WHERE id=$1', [savedId]);
  res.status(200).end();
});


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
