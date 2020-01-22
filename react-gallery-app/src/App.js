import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';

import './App.css';
import Nav from './components/NavBar';
import NotFound from './components/NotFound';

import PhotoList from './components/PhotoList'; 
import SearchBar from './components/SearchBar';
import { 
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';




class App extends Component {

  constructor() {
    // lets us use this keyword within the App class
    super();
      this.state = {
        // data will be populated into here
        photos: [],
        dogPhotos: [],
        computerPhotos: [],
        surfingPhotos: [],
        loading: true

      };
  }

  /**
   * ==== Requesting the data ====
   */

  componentDidMount() {
    // call the search on load so content is displayed automatically
    this.performSearch();
    
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          dogPhotos: response.data.photos.photo
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error); 
      });

      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=computers&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            computerPhotos: response.data.photos.photo,
            loading: false
          })
        })
        .catch(error => {
          console.log('Error fetching and parsing data', error); 
        });
      
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=surfing&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          surfingPhotos: response.data.photos.photo,
          loading: false
        })
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error); 
      });
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        })
      })
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

          <div className="Container">

            {/* searchbar at top */}
              <SearchBar onSearch={this.performSearch} />


            {/* Navigation below the searchbar */}
            <Nav />
              {     
                (this.state.loading)  
                ? <p>Loading...</p>
                : 
                // <PhotoList data={this.state.photos} />
                <Switch>
                  {/* setup the route, say which component to render */}
                  <Route exact path="/" render={() => <PhotoList photos={this.state.photos}/>} />
                  <Route path="/dogs" render={() => <PhotoList photos={this.state.dogPhotos}/>}/>
                  <Route path="/computers" render={() => <PhotoList photos={this.state.computerPhotos}/>} />
                  <Route path="/surfing" render={() => <PhotoList photos={this.state.surfingPhotos}/>} />
                  {/* add the not found component */}
                  <Route component={NotFound} />
                </Switch>
              }
          </div>
      </BrowserRouter>
    );
  }
}



export default App;
