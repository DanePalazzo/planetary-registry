import React, { useCallback, useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

function Registry() {
    const [planets, setPlanets] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        fetch("http://localhost:8085/planets")
        .then(res => res.json())
        .then(res => setPlanets(res))
    }, [])

    return(
        <div className="registry">
            <Search setSearch={setSearch}/>
            <div className="content">
                <PlanetList planets={planets} search={search}/>
                <NewPlanetForm planets={planets} setPlanets={setPlanets}/>
            </div>
        </div>
    )
}

export default Registry;