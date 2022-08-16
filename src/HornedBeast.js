import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.description}/>
        <p>{this.props.decription}</p>
      </article>
    )
  }
}

export default HornedBeast;