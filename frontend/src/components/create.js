import React, { Component } from 'react';
import Axios from 'axios';

const url = "http://127.0.0.1:8000/create_menu"

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    Axios.get(url).then(response => console.log(response))
  }

  render() {
    return (
      <div className="create container">
        <div className="heading"><h2>Create a Menu</h2></div>

        <div className="input">
          <div className="input-name"><p>Menu Id:</p></div>
          <div><input /></div>
        </div>

        <div className="input">
          <div className="input-name"><p>Name:</p></div>
          <div><input /></div>
        </div>

        <div className="input">
          <div className="input-name"><p>Subtext:</p></div>
          <div><input /></div>
        </div>

        <div className="input">
          <div className="input-name"><p>Image:</p></div>
          <div><input /></div>
        </div>

        <button
          className="save-btn btn btn-secondary"
          >
          Save
        </button>
      </div>
    )
  }
}

export default Create;
