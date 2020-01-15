import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, ];

const divStyle = {
  textAlign: "left",
};

// function isSearched(searchTerm) {
//   return function (item) {
//     return item.title.toLowerCase().includes(searchTerm.toLowerCase());
//     // return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
// } }
const isSearched = searchTerm => item => 
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        list,
        searchTerm: '',
      };
      this.onDismiss = this.onDismiss.bind(this);
      this.onSearchChange = this.onSearchChange.bind(this);
  }

  onDismiss (id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
  }

  onSearchChange (event) {
    this.setState({ searchTerm: event.target.value });
    console.log("search value:", event.target.value);
  }

  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App" style={divStyle}>
      <form>
      <input
        type="text"
        value={searchTerm}
        onChange={this.onSearchChange}
      />
      </form>
        <ul>
        {list.filter(isSearched(searchTerm)).map(item => {
          return (
            <div key={item.objectID}> <li><span>
                <a href={item.url}>{item.title} </a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>
                <button
                  onClick={() => this.onDismiss(item.objectID)}
                  type="button"
                > Dismiss
                </button>
              </span>
              </li>
            </div> 
        )})}
           
           </ul>
       </div>
     );
  }
  
}

export default App;
