import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMenu, postMenuItem, fetchMenuItem, deleteMenuItem } from '../actions';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      subtext: '',
      image: '',
      selectedItem: ''
    };
    this.changeId = this.changeId.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.save = this.save.bind(this);
    this.setSelectedItem = this.setSelectedItem.bind(this);
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
    window.location.reload();
  }

  setSelectedItem(id) {
    this.props.fetchMenuItem(id);
  }

  render() {
    return (
      <div className="menu">
        <h1>Menu</h1>
        <h3 className="menu-list">Current Menu List</h3>
        {this.props.getMenu.menuItems.map((item, index) => {
          return (
            <div key={item+index} className="render-menu-items"
              onClick={() => this.setSelectedItem(item.menuid)}
              >
              <div className="render-menu-container container">
                <div><p>Menu Id: </p>{item.menuid}</div>
                <div><p>Name: </p>{item.name}</div>
                <div><p>Subtext: </p>{item.subtext}</div>
                <div><p>Image: </p>{item.image}</div>
              </div>
              <hr />
            </div>
          )
        })}
        <div className="menu-container container">
          <div className="menu-inputs">
            <span>Menu Id:</span>
            <input onChange={this.changeId} value={this.state.id} />
          </div>
          <div className="menu-inputs">
            <span>Name:</span>
            <input onChange={this.changeName} value={this.state.name} />
          </div>
          <div className="menu-inputs">
            <span>Subtext:</span>
            <input onChange={this.changeSubtext} value={this.state.subtext} />
          </div>
          <div className="menu-inputs">
            <span>Image:</span>
            <input onChange={this.changeImage} value={this.state.image} />
          </div>
        </div>
        <button
          className="btn btn-secondary"
          onClick={this.save}>
          Save
        </button>
        <button
          onClick={() => this.props.deleteMenuItem(3)}
          >
          Delete
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    getMenu: state.getMenu,
    getMenuItem: state.getMenuItem,
  }
}

export default connect(mapStateToProps, { fetchMenu, postMenuItem, fetchMenuItem, deleteMenuItem })(Menu);
