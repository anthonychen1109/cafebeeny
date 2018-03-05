import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchMenu, postMenuItem } from '../actions';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      subtext: '',
      image: ''
    };
    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.save = this.save.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  changeId(e) {
    this.setState({ id: e.target.value})
  }

  changeName(e) {
    this.setState({ name: e.target.value})
  }

  changeSubtext(e) {
    this.setState({ subtext: e.target.value})
  }

  changeImage(e) {
    this.setState({ image: e.target.value})
  }

  save() {
    this.props.postMenuItem(this.state.id,this.state.name,this.state.subtext,this.state.image)
    this.setState({ id: '', name: '', subtext: '', image: ''})
  }

  render() {
    // console.log(this.props.getMenu);
    return (
      <div className="menu">
        <h1>Menu</h1>
        <div className="menu-container container">
          <div className="menuInputs">
            <span>Menu Id:</span>
            <input onChange={this.changeId} value={this.state.id} />
          </div>
          <div className="menuInputs">
            <span>Name:</span>
            <input onChange={this.changeName} value={this.state.name} />
          </div>
          <div className="menuInputs">
            <span>Subtext:</span>
            <input onChange={this.changeSubtext} value={this.state.subtext} />
          </div>
          <div className="menuInputs">
            <span>Image:</span>
            <input onChange={this.changeImage} value={this.state.image} />
          </div>
        </div>
        <button
          className="btn btn-secondary"
          onClick={this.save}>
          Save
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getMenu: state.getMenu
  }
}

export default connect(mapStateToProps, { fetchMenu, postMenuItem })(Menu);
