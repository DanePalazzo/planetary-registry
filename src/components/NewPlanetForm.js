import React, {useState} from "react"
import {v4 as uuid} from "uuid"

function NewPlanetForm({planets, setPlanets}) {
    const [newPlanetName, setNewPlanetName] = useState("")
    const [newPlanetClimate, setNewPlanetClimate] = useState("")
    const [newPlanetTerrain, setNewPlanetTerrain] = useState("")
    const [newPlanetPopulation, setNewPlanetPopulation] = useState("")

    function addNewPlanet(e){
        e.preventDefault()
        const newPlanet = {
            name: newPlanetName,
            climate: newPlanetClimate,
            terrain: newPlanetTerrain,
            population: newPlanetPopulation
        }
        const newArray = [ newPlanetName.trim(), newPlanetClimate.trim(), newPlanetTerrain.trim(), newPlanetPopulation.trim() ]
        if(newArray.every((ele) => ele !== "") === true){
            console.log(newPlanet)
            console.log([...planets, newPlanet])
            fetch("http://localhost:8085/planets", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newPlanet)
            })
            .then(res => res.json())
            .then(res => {
                setPlanets([...planets, res])
                setNewPlanetName("")
                setNewPlanetClimate("")
                setNewPlanetTerrain("")
                setNewPlanetPopulation("")
            })
        } else{
            alert("Please fill every field.")
        }
    }

    return(
        <form onSubmit={(e) => addNewPlanet(e)}>
            <input type="text" name="name" placeholder="Name" value={newPlanetName} onChange={(e) => setNewPlanetName(e.target.value)}/>
            <input type="text" name="climate" placeholder="Climate" value={newPlanetClimate} onChange={(e) => setNewPlanetClimate(e.target.value)}/>
            <input type="text" name="terrain" placeholder="Terrain" value={newPlanetTerrain} onChange={(e) => setNewPlanetTerrain(e.target.value)}/>
            <input type="text" name="population" placeholder="Population" value={newPlanetPopulation} onChange={(e) => setNewPlanetPopulation(e.target.value)}/>
            <input type="submit" value="Add"/>
        </form>
    );
}

export default NewPlanetForm;