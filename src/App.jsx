import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem, deleteAllItems } from './redux/actions';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

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

    const inputText = this.state.input;
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

    this.props.addItem(inputText);
    this.setState({input: ""});
  }

  handleDeleteItem(e) {
    const item = e.target.textContent;
    this.props.deleteItem(item);
  }

  handleSubmit(e) {

    e.preventDefault();
    const wishList = this.props.wishList;

    if (wishList == "") {
      alert("Wish list can't be empty")
    } else {
      alert('Wish list submitted to Santa!');
    }

    this.props.deleteAllItems(wishList)
  }

  render() {
    const wishList = this.props.wishList;

    const listItems = wishList.map((item, index) => {
      return (
        <li key={index} onClick={this.handleDeleteItem}>{item}</li>
      )
    })

    return(
      <Container>
        <Row>
          <Col className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
            <Card className="card-container">
              <Card.Body className="card card-body">
                <h4>MY WISHLIST</h4>
                <div className="list-items">
                  <ul>
                    {listItems}
                  </ul>
                </div>
                <input className="input"
                  onChange={e => this.updateInput(e.target.value)}
                  value={this.state.input}
                />
                <Button className="add-item"
                  onClick={this.handleAddItem}>
                  {"Add Item"}
                </Button>
                <Button className="submit-list"
                  onClick={this.handleSubmit}>
                  Submit List
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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

