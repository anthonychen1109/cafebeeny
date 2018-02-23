import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { fetchMenu, fetchMenuId } from '../actions';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuid: '',
      newMenuId: '',
      name: '',
      subtext: '',
      images: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeMenu = this.changeMenu.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeSubtext = this.changeSubtext.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchMenu();
  }

  handleChange() {
    let x = document.getElementById('idOfSelector');
    let y = x[x.selectedIndex].value;
    this.props.fetchMenuId(y);
    this.setState({menuid: this.props.fetchmenuid.menuItems.menuid});
    this.setState({name: this.props.fetchmenuid.menuItems.name});
    this.setState({subtext: this.props.fetchmenuid.menuItems.subtext});
    this.setState({images: this.props.fetchmenuid.menuItems.image});
      this.setImage(this.props.fetchmenuid.menuItems.image);
  }

  setImage(x) {
    this.setState({images: x})
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
    this.setState({ images: e.target.value})
  }

  render() {
    return (
      <div className="container">
        <div>
          <select id="idOfSelector" onChange={this.handleChange}>
            <option>Create an item:</option>
            {this.props.fetchmenu.menuItems.map((item,index) => {
              return (
                <option id="optionValue" key={item+index} value={item.menuid}>
                  {item.menuid}
                </option>
              )
            })}
          </select>
        </div>
        <div className="input">
          <p className="input-name">Menu id:</p> <input id="menuid" onChange={this.changeMenu} value={this.state.menuid} />
        </div>
        <div className="input">
          <p className="input-name">Name:</p> <input onChange={this.changeName} value={this.state.name} />
        </div>
        <div className="input">
          <p className="input-name">Subtext:</p> <input onChange={this.changesubtext} value={this.state.subtext} />
        </div>
        <div className="input">
          <p className="input-name">Image:</p> <input onChange={this.changeImage} value={this.state.images}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fetchmenu: state.fetchmenu,
    fetchmenuid: state.fetchMenuId
  }
}

export default connect(mapStateToProps, { fetchMenu, fetchMenuId })(Menu);
