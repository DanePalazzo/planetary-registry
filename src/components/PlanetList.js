import React, { useState } from "react"
import Planet from "./Planet"

function PlanetList({planets, search}) {
    
    const filteredPlanets = planets.filter((planet) => {
        let allFields = planet.name + planet.climate + planet.terrain + planet.population
        return allFields.toLowerCase().includes(search.toLowerCase())
        })
    console.log(filteredPlanets)

    // const mapPlanets = (()=>{
    //     return planets.map((planet) => <Planet key={planet.id} planet={planet}/>)
    // })

    const mapPlanets = filteredPlanets.map((planet)=> <Planet key ={planet.id} planet={planet}/>)

    return(
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {mapPlanets}
            </tbody>
        </table>
    );
}

export default PlanetList;