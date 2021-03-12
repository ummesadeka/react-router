import React, {  useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Team = (props) => {
    // const {idTeam}= useParams();
    const[team, setTeam] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}
        `;
        
        fetch(url)
        .then((res)=> res.json())
        .then(data=> setTeam(data.teams[0]))
    }, [])
    return (
        <div>
            <h2></h2>
            <img src={team.strTeamLogo} alt=""/>
            <p>Formed Year: {team.intFormedYear}</p>
            <p>Sport type: {team.strSport}</p>
            <p>Gender: {team.strGender}</p>
            
        </div>
    );
};

export default Team;
