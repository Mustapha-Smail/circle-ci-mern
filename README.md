# SignTalk

Application web d’apprentissage de langue des signes française

[![Build Status](https://app.travis-ci.com/Mustapha-Smail/signtalk-mern.svg?branch=main)](https://app.travis-ci.com/Mustapha-Smail/signtalk-mern)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/295dafd1c84442d9a27e5d2685997293)](https://www.codacy.com/gh/Mustapha-Smail/signtalk-mern/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Mustapha-Smail/signtalk-mern&amp;utm_campaign=Badge_Grade)
[![codecov](https://codecov.io/gh/Mustapha-Smail/signtalk-mern/branch/main/graph/badge.svg?token=ECSVYA6ILM)](https://codecov.io/gh/Mustapha-Smail/signtalk-mern)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/Mustapha-Smail/signtalk-mern?style=flat-square)](https://codeclimate.com/github/Mustapha-Smail/signtalk-mern/maintainability)
[![License](https://img.shields.io/github/license/mustapha-smail/signtalk-mern.svg?style=flat-square)](LICENSE)
[![Tag](https://img.shields.io/github/tag/mustapha-smail/signtalk-mern.svg?label=tag&style=flat-square)](https://github.com/Mustapha-Smail/signtalk-mern/releases/latest)
[![Release](https://img.shields.io/github/release/mustapha-smail/signtalk-mern.svg?style=flat-square)](https://github.com/Mustapha-Smail/signtalk-mern/releases/latest)

## Requirments 
*In order to build and run the application you need:* 
- [Node js (LTS)](https://nodejs.org/en/download/)

## Before Running the app locally 

- First you need to clone the code source into your local machine : 
```shell
git clone git@github.com:Mustapha-Smail/signtalk-mern.git
```
*NB: you need to setup an SSH key on your github account first*

- Go to your app folder, and run this command: 
```shell
cd frontend/ && npm install && cd .. && npm install 
```

- Create a file name `.env` in your root folder:
    - set the port you want your backend to run in : <br>
        *By default it's 5000* 
*By default it's 5000* 
        *By default it's 5000* 
        ```shell
        PORT=5000
        ```
    - set the URI of your MongoDB Database : <br>
        *Follow this [link](https://www.mongodb.com/docs/atlas/getting-started/) to setup your mongoDB account* <br>
        *your DB should be named `signtalk`*
        ```shell
        MONGO_URI=<YOUR_MONGODB_URI>
        ```
- Create another `.env` file in the `frontend` folder and set the URL of your backend : <br>
*DO NOT change the variable name* 
```shell
REACT_APP_BE_URL=http://localhost:5000/
```
## Run the app locally 

This section explains to you how to run this application locally <br>

- Open the terminal, go to the root folder of your app : 
    - To add the data to your DB: 
    ```shell
        npm run data:import
    ```
    - To delete the data from your DB: 
    ```shell
        npm run data:destroy
    ```
    - To run the app : 
        ```shell
        npm run start
        ```
    - To run the app in dev environment : 
        ```shell
        npm run dev
        ```
    - To run the test : 
        ```shell
        npm run test
        ```
    - To run only backend : 
        ```shell
        npm run server
        ```
    - To run only frontend : 
        ```shell
        npm run client
        ```


