import React from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './HornedBeast.css';


class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      votes: 0,
    }
  }

  handleVotes = () => {
    this.setState({
      votes: this.state.votes +1,
    });
  };

  // handleShowModal = (beast) => {
  //   this.props.handleShowModal(beast)
  // }

  // helperClick = (img) => {
  //   this.props.handleShowModal(img)
  // }

  render() {
    return (
      <Col>
      <Card className="h-100" style={{ width: '18rem' }}>
      <Card.Img onClick={() => this.props.handleShowModal(this.props.beast)} variant="top" src={this.props.beast.image_url} alt={this.props.beast.description}/>
      <Card.Body>
      <p>💖 {this.state.votes}</p>
        <Card.Title>{this.props.beast.title}</Card.Title>
        <Card.Text>
        {this.props.beast.description}
        </Card.Text>
        <p onClick={this.handleVotes}>Votes!</p>
      </Card.Body>
    </Card>
    </Col>
      // <article>
      //   <h2>{this.props.title}</h2>
      //   <p>💖 {this.state.votes}</p>
      //   <img src={this.props.image_url} alt={this.props.description}/>
      //   <p>{this.props.description}</p>
      //   <p onClick={this.handleVotes}>Vote!</p>
      // </article>
    )
  }
}

export default HornedBeast;