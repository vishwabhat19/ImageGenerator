import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';    
import axios from 'axios';

class App extends React.Component{

    /*
    Have a Search bar show up
    When user types something and clicks on enter it will show up
    list of images using a API call 
    */

   state = {images:[]};

    onSearchSubmit = async(term) =>{
       const response = await axios.get(
           'https://api.unsplash.com/search/photos/',
           {
               params: {query: term},
               headers:{Authorization: 'Client-ID e5fc57a48891287706ff730b87a4c8f29b5de621fd378bc8ebd952e37a0cd478'}

           }
       );

       this.setState({images:response.data.results});
       //Here we have to call axios and get the images
     
   }

   render(){
       /*What we are doing below is we are passing a reference of the method onSearchBarSubmit to the child class
       By doing this the child can call the method onSearchBarSubmit() which in turn calls the onSearchSubmit() method*/
       return(
            <div>
                <SearchBar onSearchBarSubmit = {this.onSearchSubmit}/>
                <div><ImageList images={this.state.images}/></div>
            </div>
       );
   };

}


export default App;