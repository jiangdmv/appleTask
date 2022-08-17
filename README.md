Installation:

Using npm:
npm start

Using docker:
docker-compose up -d --build

docker-compose up

App Instructions:

I included all the page components in a "pages" folder.

The beginning route is a Search page with a text input for entering username. The search button will fetch data of the specific user from github API and redirect to Home page

If fetch is successful, the Home page will display name and number of followers, otherwise it will redirect to an error page containing a "search again" link for redirecting to the Search page.

The Following page will initially display following as followers+10, and then increase by 10 by every click to the header "Following" or a "add 10" button.

The Repos page will display the required message when repos is not empty, otherwise it will display "this user has no repos" in addition to followers and following.

I included redirect links in most pages, so that users can redirect from Home page to Following or Repos page or go back to a new Search.

Systems Architecture:

I was deciding between querying Github APIs directly from client or using a node server to take the request. In this case, I decided to just query directly from client.

A backend server could be more useful if complicated logic will be applied to the fetched data. I feel it is not worthwhile to add additional load to the local server for this simple task. That being said, adding a backend server will make the app more flexible for additional functions. Backend servers can also do load balancing via Reverse Proxy. However, most likely the Github website has already implemented its load balancing strategies for frequently searched username and repos.

An alternative choice is to add localStorage to the frontend. Since it is likely that the same app user will search for the same username multiple times, localStorage will help search.

I was deciding between using props drilling or redux to pass data between pages. I decided to use redux for passing most of the data so as to avoid drilling everything from the App component, making the code more organized. I used thunk middleware for redux.

Since there is no need to pass the repos information to other components, I used local states for repos information. I used useEffect to fetch repos information in the repos page upon rendering. Alternatively, repos data can be added to redux if needed.

Further work:

This app can be modified to Typescript, which could control the object type and React function props type.

Frontend database can be implemented.
