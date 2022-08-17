# appleTask

Installation:

1. Using npm:

npm start

2. Using docker:

docker-compose up -d --build

docker-compose up

App Instructions:

I included all the page components in a "pages" folder.

The beginning route is a Search page with a text input for entering username. The search button will fetch data of the specific user from github API and redirect to Home page

If fetch is successufl, the Home page will display name and number of followers, otherwise it will redirect to an error page containing a "search again" link for redirecting to the Search page.

The Following page will initially display following as followers+10, and then increase by 10 by every click to the header "Following" or a "add 10" button.

The Repos page will display the required message when repos is not empty, otherwise it will display "this user has no repos" in addition to followers and following.
I included redirect links in most pages, so that users can redirect from Home page to Following or Repos page or go back to a new Search.

Systems Architecture:

I was deciding between querying Github APIs directly from client or using a node server to take the request. In this case, I decided to just query directly from client.
Although the backend servers can do load balancing via Reverse Proxy, or add Redis/CDN as caches, I am not sure if it is worthwhile to add the additional load to the local server in this case. An alternative choice is to add localStorage to the frontend. Since it is likely that the same app user will search for the same username multiple times, localStorage will help reduce load. If there are celebrity repos are hotspot on Github, a backend server in this task is necessary for load balancing of the hotspot. Though, Github should has its own loading balencing for celebrity repos.

I was deciding between using props drilling or redux to pass data between pages. I decided to use redux for passing most of the data so as to avoid drilling everything from the App component, making the code more organized. I used thunk middleware for redux.

Since there is no need to pass the repos information to other components, I used local states for repos information. I used useEffect to fetch repos information in the repos page upon rendering. Alternatively, repos data can be added to redux if needed.

Further work:

This app can be modified to Typescript, which could control the object type and React function props type.

Frontend database can be implemented.
