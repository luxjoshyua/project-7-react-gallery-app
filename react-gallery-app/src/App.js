// External Libraries/Packages
// import external packages first, then your own files
import React, { Component } from 'react';
import apiKey from './config';
import axios from 'axios';
import { 
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';

// CSS
import './App.css';

// Components
import Nav from './components/NavBar';
import PhotoList from './components/PhotoList'; 
import SearchForm from './components/SearchForm';
import FourOhFour from './components/FourOhFour';
import NoResults from './components/NoResults';


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

  // perform search automatically so when page loads, images are prepopulated
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

            <Nav onSearch={this.performSearch} />
              {     
                (this.state.loading)  
                ? 
                <h2>Loading, please hold....</h2>
                :
                <Switch>
                  <Route exact path="/" render={() => <PhotoList photos={this.state.photos}/>}  />
                  <Route path="/search" render={() => <PhotoList photos={this.state.photos}/>}  />
                  <Route path="/dogs" render={() => <PhotoList photos={this.state.dogPhotos}/>}/>
                  <Route path="/computers" render={() => <PhotoList photos={this.state.computerPhotos}/>} />
                  <Route path="/surfing" render={() => <PhotoList photos={this.state.surfingPhotos}/>} />
                  <Route component={FourOhFour } />
                </Switch>
              }
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
