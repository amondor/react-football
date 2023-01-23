import "./App.css";
import { useEffect, useState } from "react";
import BestPassers from "./components/BestPassers";
import BestStrikers from "./components/BestStrikers";
import ListLeagues from "./components/ListLeagues";
import TableStandings from "./components/TableStandings";
import axios from "axios";

function App() {
  const [leagueId, setLeagueId] = useState(61);
  const [standings, setStandings] = useState([]);
  const [league, setLeague] = useState([
    {
      country: {
        name: "Frahjbbhjdsbnce",
        code: "FR",
        flag: "https://media.api-sports.io/flags/fr.svg",
      },
      league: {
        id: 61,
        name: "Ligue 1",
        type: "League",
        logo: "https://media.api-sports.io/football/leagues/61.png",
      },
    },
  ]);

  const fetchData = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/standings",
      params: { season: "2022", league: leagueId },
      headers: {
        "X-RapidAPI-Key": "7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        setStandings(response.data.response[0].league.standings[0]);

        return;
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const fetchLeagues = async () => {
    const options = {
      method: "GET",
      url: "https://api-football-v1.p.rapidapi.com/v3/leagues",
      params: { id: leagueId },
      headers: {
        "X-RapidAPI-Key": "7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
      },
    };
    await axios
      .request(options)
      .then(function (response) {
        setLeague(response.data.response);
       
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleClick = (value) => {
    setLeagueId(value);
  };

  useEffect(() => {
    fetchData();

  }, [leagueId]);

  useEffect(() => {
   fetchLeagues();
  }, [leagueId]);

  return (
    <div className="App">
      <ListLeagues
        handleClick={handleClick}
        fetchData={fetchData}
        fetchLeagues={fetchLeagues}
      />

      <TableStandings
        standings={standings ? standings : []}
        laLeague={league}
      />

    </div>
  );
}

export default App;
