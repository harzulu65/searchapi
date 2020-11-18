import React from "react";
import { useState } from "react";
import axios from "axios";
require('dotenv').config();

const apiKey = process.env.SEARCH_API;

class Modify extends React.Component {

    state = {
        title: '',
        body: '',
        posts:[]
    }

    componentDidMount = () => {
        this.getBooksList();
    }

    getBooksList = () => {
        axios.get("http://localhost:8100/all")
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log('Data has been read from the server!', this.state.posts);
                // this.resetUserInputs();
            })
            .catch(() => {
                console.log('Error retrieving data: ');
            });
    }

    handleClick(event) {
        event.preventDefault();
        console.log("clicked", event);
        const bookImg = event.nativeEvent.path[0].currentSrc;
        const bookPath = event.nativeEvent.path[1].attributes[1];
        const newBook = {
            title: bookImg,
            path: bookPath
        }
        console.log("handleclick", newBook);
        // axios({
        //     url: 'http://localhost:8100/create',
        //     method: 'POST',
        //     data: newBook
        // })
        //     .then(() => {
        //         console.log('Data has been sent to the server!');
        //         // this.resetUserInputs();
        //     })
        //     .catch(() => {
        //         console.log('Internal server error :(');
        //     });
    }

    
    render() {
        return <>
            {this.state.posts.map((each, index)=>{
                return (
                    <div>
                        <div>
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                {/* <h5>{each.title}</h5>
                                <p>{each.path}</p> */}

                                <img src={each.title}/>

                                <a target="_blank" href={each.path}>{each.path}</a>
                                {/* <a target="_blank" href={each.path}> */}
                                {/* <img src={each.path} alt={each.title}/> */}
                                {/* </a> */}

                                {/* <button>View Details</button> */}
                                <button onClick={this.handleClick}>Delete</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>;
    }
}

export default Modify;

        

        
 