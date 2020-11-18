import React from "react";
import { useState } from "react";
import axios from "axios";
require('dotenv').config();

function Search() {

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("");
  
    function handleChange(event) {
      const book = event.target.value;
      setBook(book);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
      
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=40`)
      .then(data => {
        console.log(data);
        setResult(data.data.items);
      })
    }

    function handleClick(event) {
        event.preventDefault();
        console.log("clicked", event, event.nativeEvent.path[1].attributes[1].nodeValue);
        const bookImg = event.nativeEvent.path[0].currentSrc;
        const bookPath = event.nativeEvent.path[1].attributes[1].nodeValue;
        const newBook = {
            title: bookImg,
            path: bookPath
        }
        console.log("handleclick", newBook);
        axios({
            url: 'http://localhost:8100/create',
            method: 'POST',
            data: newBook
        })
            .then(() => {
                console.log('Data has been sent to the server!');
                // this.resetUserInputs();
            })
            .catch(() => {
                console.log('Internal server error :(');
            });
    }


    return (
    <div className="container">
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
          <a target="_blank" onClick={handleClick} href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
          </a>
        ))}
      </div>
    </div>
    );
}

export default Search;