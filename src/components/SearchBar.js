import React from 'react';
/*
Here we are building a search bar component
which can be used to take a user input 
and pass it on the App component

*/

class SearchBar extends React.Component{

    //Have a state called term. This will be the search term entered by the user
    state = {term: ''};

    /* Write code to take an input here and send it back to the App component
    So make it a form
    */

    onFormSubmit = (e) =>{
        e.preventDefault();
        //console.log(this.state);
        this.props.onSearchBarSubmit(this.state.term);
        //Now I should write code to pass this value back to the App component

    };

   render(){
       return(
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                 <div className="field">
                    <label>Search</label>
                    <input type="text" value={this.state.term} onChange = {e => this.setState({term: e.target.value})}></input>
                </div>
            </form>
        </div>
               
     );
   }

}

export default SearchBar;