import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import SelectedBeast from './SelectedBeast.js';
import Footer from './Footer.js';
import data from './data.json';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      showModal: false,
      // votes: 0,
      beast: {},
    }
  }

  // handleClick = (title2, img2, description2) => {
  //   this.setState({
  //     title: title2,
  //     img: img2,
  //     description: description2,
  //   })
  // }

  handleShowModal = (beast) => {
    this.setState({
      showModal: true,
      beast: beast,

    });
   
  };

  handleHideModal = () => {
    this.setState({
      showModal: false
    });
  };

  // handleVotes = () => {
  //   this.setState({
  //     votes: this.state.votes +1,
  //   });
  // };

  render() {
    return (
      <>
        <Header />
        <Main 
        data={data} 
        // handleVotes={this.handleVotes} 
        // votes={this.state.votes}
        handleShowModal={this.handleShowModal}
        // beast={this.state.beast}
        />
        <SelectedBeast
         show={this.state.showModal} 
         onHide={this.handleHideModal}
        handleHideModal={this.handleHideModal}
        beast={this.state.beast}
        />
        <Footer />
      </>
    );
  }
}

export default App;
