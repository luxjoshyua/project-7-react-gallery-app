import React, { Component } from 'react';
// import external packages first, then your own files
import apiKey from './config';
import axios from 'axios';
import { 
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';


import './App.css';
import Nav from './components/NavBar';
import NotFound from './components/NotFound';
import PhotoList from './components/PhotoList'; 
import SearchForm from './components/SearchForm';
import RouteError from './components/RouteError';


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
        loading: true,
        queryState: ""
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

  performSearch = (query = 'dogs') => {
    
    this.setState({
      loading:true
    })

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          photos: response.data.photos.photo,
          loading: false
        });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

 
  // render the parent App
  render() {

    return (
      <BrowserRouter>
          <div className="Container">
  
          <Route render={(props) => <SearchForm onSearch={this.performSearch} loading={this.state.loading} /> } />

            {/* Navigation below the SearchForm */}
            <Nav onSearch={this.performSearch} />
              {     
                (this.state.loading)  
                ? 
                <h2>Loading...</h2>
                :
                <Switch>
                  <Route exact path="/" render={() => <PhotoList photos={this.state.photos}/>}  />
                  <Route path="/search" render={() => <PhotoList photos={this.state.photos}/>}  />

                  <Route path="/dogs" render={() => <PhotoList photos={this.state.dogPhotos}/>}/>
                  <Route path="/computers" render={() => <PhotoList photos={this.state.computerPhotos}/>} />
                  <Route path="/surfing" render={() => <PhotoList photos={this.state.surfingPhotos}/>} />

                {/* this is wrong here: there are two error components:
                    1. 404Error is when someone enters a route that doesn't exist
                    2. NotFound is when someone enters a search query that doesn't return any results
                */}

                  <Route component={NotFound} />

                  <Route component={RouteError} />
                  
                </Switch>
              }
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
