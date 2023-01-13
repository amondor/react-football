import React from "react";

export default function TableStandings(props) {
 
  return (

    <div className=" w-full text-center">
    
     
      <div className="w-4/5  mx-auto overflow-x-scroll xl:overflow-x-hidden">

      <table className="table-fixed w-full">
        <thead className="bg-blue-200">
          <tr className="justify-between">
          <th className="ml-14 ">Classement</th>
                <th>Equipe</th>
                <th>MJ</th>
                <th>G</th>
                <th>N</th>
                <th>P</th>
                <th>BP</th>
                <th>BC</th>
                <th>DB</th>
                <th>PTS</th>
                <th>5 Derniers matchs</th>
          </tr>
        </thead>
        <tbody>
          {props.standings.length ? 
             props.standings.map((standing) => {
              return (
                <tr
                key={standing.rank}>
                        <td>{standing.rank} <img src={standing.team.logo} alt="" width={50}  /></td>
                        <td>{standing.team.name}
                        </td>
                        <td>{standing.all.played}</td>
                        <td>{standing.all.win}</td>
                        <td>{standing.all.draw}</td>
                        <td>{standing.all.lose}</td>
                        <td>{standing.all.goals.for}</td>
                        <td>{standing.all.goals.against}</td>
                        <td>{standing.goalsDiff}</td>
                        <td>{standing.points}</td>
                        <td>{standing.form}</td>
                    </tr>
                );
              })
            : null}
        </tbody>
      </table>
        </div>
    </div>
  );
}
