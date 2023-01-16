
import './App.css';
import { useEffect, useState } from 'react';
import BestPassers from './components/BestPassers';
import BestStrikers from './components/BestStrikers';
import ListLeagues from './components/ListLeagues';
import TableStandings from './components/TableStandings';
import axios from 'axios';

function App() {
  
  
  const [standings, setStandings] = useState([]);
  //const [leagues, setLeagues] = useState([]);
  const fetchData = async (id) => {
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {season: '2022', league: id ? id : 39},
      headers: {
        'X-RapidAPI-Key': '7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    await axios.request(options).then( function (response) {
      setStandings((response.data.response[0].league.standings[0]));
      return
    }).catch(function (error) {
      console.error(error);
    });
  }


  const fetchLeagues = async(id)  =>{
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      params: {id: id ? id : 39},
      headers: {
        'X-RapidAPI-Key': '7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
  }
  await axios.request(options).then( function (response) {
    console.log(response.data.response[0].league)
    return ;
  }).catch(function (error) {
    console.error(error);
  });
  }

  useEffect(() => {
    fetchData();
    fetchLeagues();

  }, []);
  
 //console.log(leagues);
  return (
    <div className="App">

     <ListLeagues fetchData={fetchData} fetchLeagues={fetchLeagues} />
   
        
     <TableStandings standings={standings ? standings : []} />
     
      
     {/* <BestStrikers /> */}
     {/* <BestPassers /> */}
    </div>
  );
}

export default App;
