import React from "react";
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render() {
    let beastArr = this.props.data.map((beast, idx) => {
      return (<HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={idx}
        // handleVotes={this.props.handleVotes}
        // votes={this.props.votes}
        handleShowModal={this.props.handleShowModal}
        beast={beast}
      />);
    });

    return (
      <main>
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