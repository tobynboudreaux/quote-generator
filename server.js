const axios = require("axios");

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

function display(author, content) {
  console.log("Author:", author, "\n", "Content:", content);
}
