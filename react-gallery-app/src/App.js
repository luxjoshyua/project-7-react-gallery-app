import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import apiKey from './config';
import PhotoList from './components/PhotoList'; 
import SearchForm from './SearchForm';



export default class App extends Component {

  constructor() {
    // lets us use this keyword within the App class
    super();
      this.state = {
        // data will be populated into here
        photos: [],
        loading: true
      };
  }

  componentDidMount() {
    // call the search on load so content is displayed automatically
    this.performSearch(); 
  }

  // Request the data - use native Fetch API
  /**
   * ==== Requesting the data ====
   */
  componentDidMount() {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=labrador&per_page=24&format=json&nojsoncallback=1`)
    // make JSON data available to the app
      .then(response => response.json() )
      .then(responseData => {
        // console.log(responseData.photos.photo);
        this.setState({ 
          photos: responseData.photos.photo,
          loading: false
        });
      })
      // if there's an error returning the data, catch it here
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }


  // render the parent App
  render() {

    // check what the API is returning
    // trying to log each object, each object should be a separate photo
    console.log(this.state.photos, "Im here"); 
    
    return (
      <div className="App">
          {/* <SearchForm /> */}
    
        
          {/* // if the state is loading, render a paragraph, otherwise if loading state is false, render the gif list component */}
          {/* // (this.state.loading) ? <p>Loading...</p> : <PhotoList data={this.state.photos} /> */}


          {/* searchbar at top */}
          {/* <SearchForm /> */}
        
          
          {/* <Nav /> */}
          
         
          <PhotoList data={photos} />

        
      </div>
    );
  }

}



// export default App;
