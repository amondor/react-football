import React from 'react'

export default function LeagueCard() {
  return (
    <div className='flex space-x-4 space-y-6'>
       <img className='h-24' src="https://media.api-sports.io/football/leagues/61.png" alt="" />
        <h2 className='text-xl font-semibold leading-tight'>Ligue 1 France 🇫</h2>
        <img className=" h-7" src="https://media-1.api-sports.io/flags/fr.svg" alt="Ligue 1"></img>
    </div>
  )
}
