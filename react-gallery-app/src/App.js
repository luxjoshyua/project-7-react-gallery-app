import React, { Component } from 'react';
import apiKey from './config';

import './App.css';
import Nav from './components/NavBar';
import NotFound from './components/NotFound';

import PhotoList from './components/PhotoList'; 
import SearchBar from './components/SearchBar';
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';



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
      <BrowserRouter>
        <div className="App">
          <div className="Container">

            {/* searchbar at top */}
              <SearchBar onSearch={this.performSearch} />
            {/* Navigation below the searchbar */}
              <Nav />
            {/* setup the routes */}
            <Switch>
              {/* setup the route, say which component to render */}
              <Route exact path="/" />
              <Route path="/dogs" />
              <Route path="/computers" />
              <Route path="/surfing" />
              {/* add the not found component */}
              <Route component={NotFound} />
            </Switch>
              {/* // if the state is loading, render a paragraph, otherwise if loading state is false, render the gif list component */}
              {
                (this.state.loading)  
                ? <p>Loading...</p>
                : <PhotoList data={this.state.photos} />
              }
              </div>
          </div>
      </BrowserRouter>
    );
  }
}



// export default App;
