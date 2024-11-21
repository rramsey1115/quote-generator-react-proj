import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const quotesArray = [
    {
      id: 1,
      quote:
        "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 2,
      quote:
        "In the end, we will remember not the words of our enemies, but the silence of our friends.",
      author: "Martin Luther King Jr.",
    },
    {
      id: 3,
      quote: "The purpose of our lives is to be happy.",
      author: "Dalai Lama",
    },
    {
      id: 4,
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      id: 5,
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      id: 6,
      quote:
        "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      author: "Buddha",
    },
    {
      id: 7,
      quote: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      id: 8,
      quote:
        "Our greatest glory is not in never falling, but in rising every time we fall.",
      author: "Ralph Waldo Emerson",
    },
    {
      id: 9,
      quote: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
    },
    {
      id: 10,
      quote: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      id: 11,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      id: 12,
      quote: "If you tell the truth, you don't have to remember anything.",
      author: "Mark Twain",
    },
    {
      id: 13,
      quote: "The journey of a thousand miles begins with one step.",
      author: "Lao Tzu",
    },
    {
      id: 14,
      quote: "That which does not kill us makes us stronger.",
      author: "Friedrich Nietzsche",
    },
    {
      id: 15,
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      id: 16,
      quote: "Be yourself; everyone else is already taken.",
      author: "Oscar Wilde",
    },
    {
      id: 17,
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
    },
    {
      id: 18,
      quote:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
    },
    {
      id: 19,
      quote:
        "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama",
    },
    {
      id: 20,
      quote: "The only impossible journey is the one you never begin.",
      author: "Tony Robbins",
    },
  ];

  const [quote, setQuote] = useState({});
  const [quoteColorNum, setQuoteColorNum] = useState(0);

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    let quoteId = Math.floor(Math.random() * quotesArray.length) + 1;
    const foundQuote = quotesArray.find((quote) => quote.id == quoteId);


    if (foundQuote.id <= 4) {
      setQuoteColorNum(1);
    } else if (foundQuote.id > 4 && foundQuote.id <= 8) {
      setQuoteColorNum(2);
    } else if (foundQuote.id > 8 && foundQuote.id <= 12) {
      setQuoteColorNum(3);
    } else if (foundQuote.id > 12 && foundQuote.id <= 16) {
      setQuoteColorNum(4);
    } else {
      setQuoteColorNum(5);
    }

    setQuote(foundQuote);
  };

  return (
    <div id="quote-box">
      <header className="header">
        <h1>Quote Generator</h1>
      </header>
      <section
        className={quote.quote ? `card color-${quoteColorNum}` : "card-hidden"}
      >
        <div id="text">{quote.quote && <h2 id="quote">{quote.quote}</h2>}</div>
        <div className="author-container">
          {quote.author && <h4 id="author">-{quote.author}</h4>}
        </div>
        <footer id="footer">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
            Share on X
          </a>
        </footer>
      </section>
      <div className="btn-container">
        <button id="new-quote" className="btn" onClick={generateQuote}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
