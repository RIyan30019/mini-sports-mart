import React, { useState,useEffect } from 'react';
import Players from '../Players/Players';

const Home = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
      fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setPlayers(data.leagues.slice(0, 12)))
    }, [])
    
    return (
        <div class="row">
          {
            players.map(players => <Players players={players}></Players>)
          }
        </div>
    );
};

export default Home;