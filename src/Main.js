import React from "react";
import HornedBeast from './HornedBeast.js';
import Horns from './Horns.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import data from './data.json';
import './Main.css';

class Main extends React.Component {
  constructor(props) {
  super(props);
  this.state = {

    howToSort: 0,
    filteredData: this.props.data,
  };
}

handleSubmit = (e) => {
  e.preventDefault();
  console.log('This was clicked');
  if (this.state.howToSort === 1) {
    console.log('I am here');
    let newData = this.props.data.filter(num => num.horns === 1);
    this.setState({filteredData: newData});
    console.log(newData);
  } else if (this.state.howToSort === 2) {
    let newData = this.props.data.filter(num => num.horns === 2);
    this.setState({filteredData: newData});
  } else if (this.state.howToSort === 3) {
    let newData = this.props.data.filter(num => num.horns === 3);
    this.setState({filteredData: newData});
  } else if (this.state.howToSort === 100) {
    let newData = this.props.data.filter(num => num.horns=== 100);
    this.setState({filteredData: newData});
  } else {
    this.setState({filteredData: this.props.data});
  }
};

handleSelect = (e) => {
  let selected = parseInt(e.target.value);
  this.setState({
    howToSort: selected
  })
}



  render() {

    let beastArr = this.state.filteredData.map((beast, idx) => {
      return (<HornedBeast
        key={idx}
        handleShowModal={this.props.handleShowModal}
        beast={beast}
      />);
    });

    

    return (
      <main>
        <Horns 
        data={this.props.data}
        handleSelect={this.handleSelect}
        handleSubmit={this.handleSubmit}
        />
        <Container>
          <Row xs={1} sm={2} md={3} lg={4}>
            {beastArr}
          </Row>
        </Container>
      </main>
    )
  }
}

export default Main; 