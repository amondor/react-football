import axios from 'axios';
import React, {useState} from 'react'

export default function BestPassers() {

    const [leagues, setLeagues] = useState([]);
    const optionsLeagues = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      headers: {
        'X-RapidAPI-Key': '7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
  
    
  
    const fetchLeagues = async () => {
  
      await axios
      .request(optionsLeagues)
      .then(function (response) {
        //console.log(response.data);
        //remplir le tableau de leagues
        //setLeagues(response.data.response[0].leagues)
        //console.log(leagues)
        
      }).catch(function (error) {
        console.error(error);
      });
  
    }
    
    fetchLeagues()
  

    const optionsAssists = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players/topassists',
        params: {league: '39', season: '2020'},
        headers: {
          'X-RapidAPI-Key': '7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
  return (
    <div>BestPassers</div>
  )
}
