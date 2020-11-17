import React from 'react';
import { connect } from 'react-redux';
import { addItem, deleteItem } from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: ""  };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  updateInput(input) {
    this.setState({ input });
  }

  handleAddItem() {
    this.props.addItem(this.state.input)

    this.setState({input: ""})
  }

  handleDeleteItem(e) {
    const item = e.target.textContent

    this.props.deleteItem(item)
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
        <h1> Wish List </h1>
        <ul>
          {listItems}
        </ul>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-item" onClick={this.handleAddItem}>
          Add Todo
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    wishList: state.wishList
  };
}

const mapDispatchToProps = { addItem, deleteItem }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

