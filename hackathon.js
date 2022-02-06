const text = document.getElementById("quote");
const author = document.getElementById("author");

const getNewQuote = async () => {
  //api for quotes
  var url = "https://type.fit/api/quotes";

  // fetch the data from api
  const response = await fetch(url);
  console.log(typeof response);
  //convert response to json and store it in quotes array
  const allQuotes = await response.json();

  const indx = Math.floor(Math.random() * allQuotes.length);

  const quote = allQuotes[indx].text;
  const auth = allQuotes[indx].author;

  if (auth == null) {
    author = "Anonymous";
  }

  //function to dynamically display the quote and the author
  text.innerHTML = quote;
  author.innerHTML = "~ " + auth;
};
getNewQuote();
