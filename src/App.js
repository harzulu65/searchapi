import React from "react";
import { useState } from "react";
import './App.css';
import axios from "axios";

function App() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyBBXFTunPPEx_fdU0HPkIWbEJkcFQE1BJ0");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
    .then(data => {
      console.log(data.data.items);
      setResult(data.data.items);
    })
  }

  return (
    <div className="container">
      <h1>Book Search Application</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input 
              type='text' onChange={handleChange}
              className="form-control mt-10" 
              input="input-control" 
              placeholder="Search for Books" 
              autoComplete="off"/>
        </div>
        <button type="submit" className="btn btn-danger">Search</button>
      </form>

      {result.map(book => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
        </a>
      ))}
    </div>
  );
}

export default App;
