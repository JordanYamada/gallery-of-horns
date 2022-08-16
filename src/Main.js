import React from "react";
import HornedBeast from './HornedBeast.js';
import data from './data.json';
import './Main.css';

class Main extends React.Component {
  render () {
    let beastArr = [];
    data.forEach((beast,idx) => {
      beastArr.push(<HornedBeast
        title={beast.title}
        image_url={beast.image_url}
        description={beast.description}
        key={idx}
        />);
    });

    return (
      <main>
        {beastArr}
      </main>
    )
  }
}

export default Main; 