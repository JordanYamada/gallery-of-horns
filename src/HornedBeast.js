import React from "react";
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';

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

  render() {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} alt={this.props.description}/>
      <Card.Body>
      <p>💖 {this.state.votes}</p>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <p onClick={this.handleVotes}>Votes!</p>
      </Card.Body>
    </Card>
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