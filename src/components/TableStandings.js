import React, { useState, useEffect } from "react";

export default function TableStandings(props) {

  
   console.log(props.laLeague);

  return (


    <div className=" mt-5 w-full text-center">
      <div className="w-4/5  mx-auto overflow-x-scroll xl:overflow-x-hidden">
        <div className="flex space-x-4 space-y-6">
          {props.laLeague && (
            <img className="h-24" src={props.laLeague[0].league.logo} alt="" />
          )}
          {props.laLeague && (
            <h2 className="text-xl font-semibold leading-tight">
              {props.laLeague[0].league.name} {props.laLeague[0].country.name}
            </h2>
          )}
          <img
            className=" h-7"
            src={props.laLeague[0].country.flag}
            alt="Ligue 1"
          ></img>
        </div>

        <table className="table-fixed w-full mt-5">
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
            {props.standings.length
              ? props.standings.map((standing) => {
                  return (
                    <tr key={standing.rank}>
                      <td className="px-5 py-5  border-b border-gray-200 w-32 bg-white text-sm">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-10">
                            {standing.rank}
                          </div>
                          <div className="ml-3 w-10 ">
                            <img src={standing.team.logo} alt="" width={50} />
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.team.name}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.played}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.win}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.draw}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.lose}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.goals.for}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.all.goals.against}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.goalsDiff}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.points}
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 w-36 bg-white text-sm">
                        {standing.form}
                      </td>
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
