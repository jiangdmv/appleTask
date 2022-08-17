# appleTask

Installation:

1. Using npm:

npm start

2. Using docker:

docker-compose up -d --build
docker-compose up

App Instructions:
I include all the page components in a "pages" folder.
The beginning route is a Search page with a text input for entering username. The search button will fetch data of the specific user from github API and redirect to Home page
If fetch is successufl, Home page will display name and number of followers, otherwise it will redirect to an error page containing a "search again" link for redirecting to the Search page.
I included redirect links in most pages, so that users can redirect from Home page to Following or Repos page or go back to Search.

Systems Architecture:
I was deciding between querying Github APIs directly from client or using a node server to take the request. In this case, I decided to just query directly client.
I thought about the possibility of using node server + mongodb as cache for fetched data but I am not sure if it is worthwhile to add the additional load to the local server, though the backend servers can do loading balancing via Reverse Proxy or add Redis/CDN as caches. An alternative choice is to add localStorage to the front end. Since it is likely that the same app user will search for the same username multiple times, localStorage will help reduce load.

I was deciding between using props drilling or redux to pass data between pages. I decided to use redux for passing most of the data so as to avoid drilling everything from the App component, making the code more organized. Since there is no need to pass the repos information, I used useEffect to fetch repos information in the repos page upon rendering that page.

Further work:
This app can write by using Typescript, which could control the object type and React function props type.
