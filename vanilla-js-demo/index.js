console.log("index.js loaded!");

const API = "https://dog.ceo/api/breeds/image/random";

fetch(API)
  .then(res => res)
  .catch(err => {
    console.log(err);
  });
