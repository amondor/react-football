import React from 'react'

export default function BestStrikers() {

    const optionsStrickers = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/players/topscorers',
        params: {league: '39', season: '2020'},
        headers: {
          'X-RapidAPI-Key': '7269d10b36msh1cb87fe4b3cdaf9p19bb9bjsne916fe1cbeca',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      };
  return (
    <div>
        <h2 className='text-xl'>BestStrikers</h2>
        <table class="table-fixed mt-5">
            <thead>
                <tr className='px-5 py-3 w-auto border-b-2 border-red-200 bg-green-200 text-left text-xs font-semibold text-gray-600 uppercase'>
                <th>Classement</th>
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
                <tr>
                <td>The Sliding Mr. Bones (Ncxcsfghjkjhgfd)</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
                </tr>
                <tr>
                <td>Witchy Woman</td>
                <td>The Eagles</td>
                <td>1972</td>
                </tr>
                <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>1975</td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}
