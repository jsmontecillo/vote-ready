
<div align="center">
  <img src="https://i.ibb.co/2ZJHDv6/Vote-Ready-Photo-Room.png"/>
</div>

<div align="center">
  <a href="https://server-6nco.onrender.com">Render Link</a>
 </div>

Log into Gmail with this test user.
| Email             | Password                                                              |
| ----------------- | ------------------------------------------------------------------ |
| votereadytest1@gmail.com | voteready |


Vote Ready is a web app that aims to combat the density and overwhelm of other applications by providing a simple and accessible organization of the current candidates and referendums on the ballot in Los Angeles. This website is a starting point for new and seasoned voters alike, allowing users to keep track of their votes with a saving feature.

# Contents

  - [Landing Page](#landing-page)
  - [Tech Stack](#tech-stack)
  - [Tools](#tools)
  - [Database Diagram](#database-diagram)
  - [Wireframe](#wireframe)
  - [APIs](#apis)
  - [Installation](#installation)
  - [Unsolved Problems](#unsolved-issues)
  - [Future Development](#future-development)

## Landing Page

![LandingPage](https://i.ibb.co/n3hBB9W/Screen-Shot-2022-11-23-at-8-56-42-AM.png)

## Tech Stack

<table align="center">
  <tr>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168923681-ece848fc-5700-430b-957f-e8de784e9847.png" width="48" height="48" alt="html" />
      <br>html
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168924521-589f95da-069a-496a-bcc1-ee6dd132ff12.png" width="48" height="48" alt="CSS" />
      <br>CSS
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168977094-6a5073a2-2f48-4f5a-ae0e-ed1421a678c6.png" width="48" height="48" alt="JavaScript" />
      <br>JavaScript
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168976819-15a1f4e0-29cf-4ac0-94a7-1f15eee374a1.png" width="48" height="48" alt="postgreSQL" />
      <br>postgreSQL
    </td>
    <td align="center" width="96">
        <img src="https://user-images.githubusercontent.com/74997368/168978951-5ac2af5e-c911-4e59-b493-683071cf1860.png" width="48" height="48" alt="Express" />
      <br>Express
    </td>
    </tr>
  <tr>
    <td align="center" width="120">
        <img src="https://user-images.githubusercontent.com/74997368/168979311-4a486cad-32c8-46f4-a5da-912fdc51b2d6.png" width="48" height="48" alt="React" />
      <br>React
    </td>
    <td align="center" width="120">
        <img src="https://user-images.githubusercontent.com/74997368/168979848-733f7090-0f78-401a-9ceb-4267231abef7.png" width="48" height="48" alt="Node" />
      <br>Node
    </td>
    <td align="center" width="120">
        <img src="https://user-images.githubusercontent.com/74997368/168980647-1690f9de-bf0e-4318-93cb-1b2ba3701ded.png" width="48" height="48" alt="Bootstrap" />
      <br>Bootstrap
    </td>
    <td align="center" width="120"> 
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/j8z02ssteea4zj1k1nyz" width="48" height="48" alt="Render" />
      <br>Render
    </td>
  </tr>
</table>

## Tools

- VS Code

- Chrome Developer Tools

- TDD (Jest & RTL)

- Terminal

- Git

- GitHub

## Database Diagram

<div align="center">
  <img src="https://i.ibb.co/KmKKmbz/Screen-Shot-2022-11-23-at-9-07-13-AM.png" width="500" alt="db diagram" />
</div>

## Wireframe

<div align="center">
  <img src="https://i.ibb.co/MpLvVgM/finalprojecttechtonica.png" width="800" alt="wireframe" />
</div>

## APIs


| API             | Link                                                              |
| ----------------- | ------------------------------------------------------------------ |
| Google Civic Information API | [Google Civic Information API](https://developers.google.com/civic-information/docs/v2) |
| Auth0 | [Auth0](https://auth0.com/docs) |


### Installation

1. Clone the repo:
   ```sh
   git clone https://github.com/jsmontecillo/vote-ready
   ```
2. Install all NPM packages using this in the root directory:
   ```sh
   npm install
   ```
3. Database setup:
   1. Copy the root example environment file

   ```sh
   cp .env.example .env
   ```
   2. You can choose to edit `.env` or just use as-is.
   3. Run the following to setup the database with the seed file:
   ```sh
   npm run db:init
   ```

Start the app and view it at <http://localhost:3000> by using:
   ```sh
   npm start
   ```
Shut Down the Express and React development servers using `Ctrl-C` .

#### Set Up React client for `auth0`
If you want to try it with Auth0, the frontend needs to be setup with the following:

1. Copy the app's example environment file.

   ```sh
   cp app/.env.example app/.env
   ```

2. The `.env` file allows the React app to use Auth0, and requires an Auth0 domain + client-id.
   - These can be obtained by signing up for an Auth0 account and [Registering a Single-Page Web Application](https://auth0.com/docs/get-started) in order to get these values.
   - This [graphic](https://images.ctfassets.net/23aumh6u8s0i/1DyyZTcfbJHw577T6K2KZk/a8cabcec991c9ed33910a23836e53b76/auth0-application-settings) from [Auth0's guide](https://auth0.com/blog/complete-guide-to-react-user-authentication/#Connect-React-with-Auth0) may be helpful to locating them.
## Unsolved Issues

- Saved candidates may lag when loading onto page.

## Future Development
- Incorporate Google Maps API to view voting locations on a map with markers.
- Filter candidates by values.
- Translate pages into other languages such as Mandarin, Tagalog, and Vietnamese.
