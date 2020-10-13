const axios = require("axios");
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send(quote());
});

function quote() {
  axios({
    method: "GET",
    url: "https://quotes15.p.rapidapi.com/quotes/random/",
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": "77bc85f9femsh8cc7ee10e72cfafp1ccc58jsna4131bc1c32a",
      useQueryString: true,
    },
    params: {
      language_code: "en",
    },
  })
    .then((response) => {
      display(response.data.originator.name, response.data.content);
    })
    .catch((error) => {
      console.log(error);
    });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function display(author, content) {
  console.log("Author:", author, "\n", "Content:", content);
}
