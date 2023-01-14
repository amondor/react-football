import React, { useState } from "react";
import axios from "axios";


export default function ListLeagues(props) {
  const dataLeagues = [
    {
      id: 61,
      name: "Ligue 1",
      country: "France",
      root: "/ligue1"
    },
    {
      id: 62,
      name: "Ligue 2",
      country: "France",
      root: "/ligue2"
    },
    {
      id: 135,
      name: "Serie A 🇮🇹",
      country: "Italie",
      root: "/seriea"
    },
    {
      id: 78,
      name: "Bundesliga 🇩🇪",
      country: "Germany",
      root: "/bundesliga"
    },
    {
      id: 39,
      name: "Premier League 🇬🇧",
      country: "England",
      root: "/premierleague"
    },
    {
      id: 140,
      name: "Primera Division 🇪🇸",
      country: "Spain",
      root: "/primeradivision"
    },
    {
      id: 94,
      name: "Primeira Liga 🇵🇹",
      country: "Portugal",
      root: "/primeiraliga"
    },
    {
      id: 88,
      name: "Eredivise 🇳🇱",
      country: "Netherlands",
      root: "eredivise"
    },
    
  ];

 
  return (
    <>

    <div className="w-full text-center mt-5 ">
        <div className="flex flex-row overflow-auto  space-x-12 w-4/5 mx-auto justify-between  border-b-2 border-gray-100 ">
      {dataLeagues.map((league) => {
        return (
      <div>
          <nav className=" ">
              <div className="">
                <button onClick={() => {
                  props.fetchData(league.id)
                  props.fetchLeagues(league.id)
                } 
              }
              key={league.id} 
              className="mt-5 mb-5 mr-10" href={league.root} >
                  {league.name}
                </button>
              </div>
            </nav>
            <div>
              <img src={props.leagues} alt="" />
            </div>
      </div>
        );
      })}
      </div>
  
    </div>
      
      
    </>
    
    
  );
}
