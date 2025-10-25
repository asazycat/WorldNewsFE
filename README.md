( ⚠️ **Work in Progress** – This project is still in the early stages. Features and UI may change dramatically.)

Stackblitzs Link - https://stackblitz.com/~/github.com/asazycat/WorldNewsFE
## 📰 World News - (Early Stages)

World News is a sources of news articles from many different news outlets (BBC, New York Times, MSN..etc) accross the globe. It is an archieve built with endpoints from WorldNewsAPI(https://worldnewsapi.com/docs/). NextJS is used to build the frontend artitecture along with Materials UI and some tailwind CSS for styling. API calls from WorldNewsAPI are limited and won't go beyond 50 tokens. In order to tackle this problem, api responses were otherwise cached in memory or pushed to an ORM to be called from there for reducing requests directly from WorldNewsAPI.  

## MAIN Features

**-- Login page/Sign Up setup**

**-- Search for news articles from a variety of sources, different countries and in different languages** 

**-- Extract news content from a given link and have it displayed regardless of format**

**-- Summarise news videos and content into written format**

**-- List of top news on  homepage**

**-- Retrieve News articles saved by user**

**-- Check for news sources monitored by WorldNews API**

## 🚀 Tech Stack

- **NextJS**
- **TypeScript**
- **Material UI**
- **Prisma ORM**
- **AuthJS**



## 🔗 Live Demo

[https://world-news-puce.vercel.app/] (world-news-puce.vercel.app)

## 📦 Local SetUp and Installation

**Git clone the repo** 

**npm i to install dependencies**

**npx auth secrect to generate a locla key for auth for authjs**

**npx prisma schema**

**npx prisma db seed**

**create a .env file in the root folder and copy the contents below**

**npm run dev**

```bash
//.env
DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19VbEVGUHJrZUdIMGdxTURBQzFSZVAiLCJhcGlfa2V5IjoiMDFLNjlQUUtWOFA1VEFQU05ENFk5RkdSQTUiLCJ0ZW5hbnRfaWQiOiJhMDE3ZmYyZmU3NmExNDYzY2RlOWU0NzUwMmRiZTQ5OTM5Nzg5N2IwMzIwZWZkZmEwZTBjNWM5YTE1ZjNjYmQ4IiwiaW50ZXJuYWxfc2VjcmV0IjoiZmQ0YzZhNGYtZGE2YS00ZDQxLWFhMTMtZWQxNWMzNjI5MmJjIn0.7JRJZLkcUdfQ-jhvenE3qxlbrhQwPsNhxfS65ZbgOq0"

AUTH_SECRET="whatever auth secret key was generated for you"

AUTH_URL="http://localhost:3000"

 

```

(If you get a server error when running the app on the browser, please change the api key in public/apiKey.ts to the one you can retrieve from https://worldnewsapi.com/docs/ . This is still in early development, plan to fix this later.)

