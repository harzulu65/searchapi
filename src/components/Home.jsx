import React from "react";

function Home() {
    return <div className="container">
        <h1>Google Books Api Search</h1>
        <p>This App will get data from the Google Books API </p>
        <p>It will render the pictures of the books with the title selected by the user.</p>
        <p>In the Search for Books Input on the SEARCH option of this menu click on SEARCH</p>
        <p>After that if user wants to save any of the books just click on the picture and 
        it will be saved on the Mongo Database</p>
        
        <p>Modify option will read the MongoDB Atlas database and will show the books saved</p>
    </div>
}

export default Home;