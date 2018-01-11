import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      'menu': []
    };
  }

  componentDidMount() {
    fetch('http://127.0.0.1:8000/api/menu/')
    .then(response => response.json())
    .then(response => this.setState({ 'menu': response }))
  }

  render() {
    return (
      <div>
        {this.state.menu.map(item => {
          return (
            <div key={item.id}>
              <li>{item.menuid}</li>
              <li>{item.name}</li>
              <li>{item.subtext}</li>
              <li>{item.image}</li>
            </div>
          )
        })}
      </div>
    );
  }
}

export default SearchBar;
