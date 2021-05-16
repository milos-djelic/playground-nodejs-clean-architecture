# Consuming GitHub API
The aim of this project is to implement best practicies of the clean architecture for the nodejs backend api application. 

### Features: 
  - fetching users by programming language (present in their repositories) by using [GitHub API](docs.github.com)
  - showing user data and number of followers
  - showing the most popular repository of a user
  
## Installation
The application contains Dockerfile and can be run inside a docker container: 
```
docker build -t github-users-01
docker run -p 3000:3000 -d github-users-01
```

Alternatively, it can be run directly from the terminal: 
```
npm i
npm run build
npm run start
```