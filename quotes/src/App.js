import './App.css';
import twitter  from "./iconmonstr-twitter-1.svg";
import axios from "axios";
import React from "react";

function App() {

  const initialState ={
    author:"",
    quote:"",
    data:{},
  }
  async function getContent(){
    await axios.get(url).then((response)=>{
      setContent({...content, data: response.data})
    });
    getRandomQuote();
    setChargeData(true)
    }
  const [chargeData, setChargeData] = React.useState(false)
  React.useEffect(() =>{
    if(!chargeData){
      getContent();
    }
  })
  const[content, setContent] = React.useState(initialState)
  const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function getRandomQuote(){
  let arrIndex = Math.floor(Math.random()*content.data.quotes.length);

  setContent({...content, author:content.data.quotes[arrIndex].author, quote:content.data.quotes[arrIndex].quote})
  console.log(`author :${content.author} \n quote:${content.quote}`)
};

  return (
    <div className="App">
      <div id="quote-box" className="novo">
        <div id="text">
        <h3>{content.quote}</h3>
        </div>
        <div id="author">{content.author}</div>
        
        <span id="icons">
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><img id="tweet-ico"alt="tweet icon, to publish the quote" src={twitter}></img></a>
        <div id="new-quote" alt="new quote button, to get a new quote" onClick={getRandomQuote}>new quote</div>
        </span>
      </div>
    </div>
  );
}

export default App;
