import React from 'react';
import './App.css';
import axios from "axios";
import PlayerList from "./components/PlayerList";
import Header from "./components/Header";


class App extends React.Component {

  state = {
    players: []

  };

  
  componentDidMount() {

  axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log(response.data)
      this.setState({
        players: response.data
      });
    })
    .catch(error=> console.log(error));


  }



  render() {
  return (
    <div className="App">

      <Header />
     
    <h1>Players </h1>
      <div className="playerList">
      {this.state.players.map((player, index) => {
        return <PlayerList theplayers={player} key={index} />
      })}

      </div>



    </div>
  );
  }
}

export default App;
