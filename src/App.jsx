import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, deleteAllItems } from './redux/actions';
import { Container, Button } from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(input) {
    this.setState({ input });
  }

  handleAddItem() {

    const inputText = this.state.input

    const wishList = this.props.wishList;

    const indexOfItem = wishList.indexOf(inputText);

    if (indexOfItem !== -1) {
      this.setState({input: ""})
      alert("Please do not repeat the item.");
      return false;
    }


    if (inputText == "") {
      alert("Please write something.");
      return false;
    }

    this.props.addItem(inputText)

    this.setState({input: ""})
  }

  handleDeleteItem(e) {
    const item = e.target.textContent

    this.props.deleteItem(item)
  }

  handleSubmit(e) {

    const wishList = this.props.wishList;

    if (wishList == "") {
      alert("Wish list can't be empty")
    } else {
      alert('Wish list submitted to Santa!');
    }

    this.props.deleteAllItems(wishList)

    e.preventDefault();
  }

  render() {
    const wishList = this.props.wishList;

    const listItems = wishList.map((item, index) => {

      return (
        <li key={index} onClick={this.handleDeleteItem}>{item}</li>
      )
    })

    return(
      <div>
        <Container fluid>
          <h1> Wish List </h1>
          <ul id="list-items">
            {listItems}
          </ul>
          <input
            onChange={e => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          <Button variant="primary" className="add-item"
            onClick={this.handleAddItem}>
            {"Add Todo"}
          </Button>
          <Button variant="success" className="submit-list"
            onClick={this.handleSubmit}>
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList
  };
}

const mapDispatchToProps = { addItem, deleteItem, deleteAllItems }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

