import React, { Component } from 'react';
import { connect } from 'react-redux';

// ACTIONS
import { fetchMenu, postMenu, updateMenu } from '../actions';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuid: '',
      name: '',
      subtext: '',
      image: '',
      'items': []
    };
    this.changeMenu = this.changeMenu.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeMenu(e) {
    this.setState({ menuid: e.target.value})
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.postMenu(
      this.state.menuid,
      this.state.name,
      this.state.subtext,
      this.state.image
    );
    this.setState({
      menuid: '',
      name: '',
      subtext: '',
      image: ''
    })
  }

  componentDidMount() {
    console.log('componentmounted', this.props.fetchMenu());
  }

  render() {
    console.log('resolved', this.props.fetchmenu);
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="title"><h1>Menu:</h1></div>
          <select>
            <option>
              Create A New Menu
            </option>
            {this.props.fetchmenu.menuItems.map((item, index) => {
              return (
                <option key={item.menuid}>
                  {item.menuid}
                </option>
              )
            })}
          </select>
            <div className="input">
              <div className="input-name"><p>Menu ID:</p></div>
              <div><input onChange={this.changeMenu} value={this.state.menuid}/></div>
            </div>
          <div className="input">
            <div className="input-name"><p>Name:</p></div>
            <div><input onChange={this.changeName} value={this.state.name}/></div>
          </div>
          <div className="input">
            <div className="input-name"><p>Subtext:</p></div>
            <div><input onChange={this.changeSubtext} value={this.state.subtext}/></div>
          </div>
          <div className="input">
            <div className="input-name"><p>Image:</p></div>
            <div><input onChange={this.changeImage} value={this.state.image}/></div>
          </div>
          <button
            className="save-btn btn btn-secondary"
            >
            Save
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ fetchmenu, postmenu, updatemenu }) {
  return {
    fetchmenu,
    postmenu,
    updatemenu
  }
}

export default connect( mapStateToProps , { fetchMenu, postMenu, updateMenu })(Create);
