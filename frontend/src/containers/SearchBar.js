import React, { Component } from 'react';
import { connect } from 'react-redux';

//ACTIONS
import { fetchMenu } from '../actions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      'menu': []
    };
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return (
      <div className="container">
        <button
          onClick={() => this.props.fetchMenu()}
          >
          fetch
        </button>
        {this.props.menu.map((item,index) => {
          return (
            <div key={index}>
              <li>id: {item[index].id}</li>
              <li>name: {item[index].name}</li>
              <li>subtext: {item[index].subtext}</li>
              <li>image: {item[index].image}</li>
            </div>
          )
        })}
      </div>
    );
  }
}

function mapStateToProps({ menu }) {
  return {
    menu
  }
}

export default connect(mapStateToProps, { fetchMenu })(SearchBar);
