import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol, faFlag, faVenusMars, faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import './TeamDetails.css'

const TeamDetails = () => {
    const { idLeague } = useParams()
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then(res => res.json())
            .then(data => setLeague(data.leagues[0]))
    }, [idLeague])
    console.log(league)

    // const newDetails=league.map(team =>team);

    const { strGender, strLeague, strCountry, dateFirstEvent, strSport, strBadge, strDescriptionEN, strFacebook, strTwitter, strYoutube, strBanner } = league;


    return (
        <Container>

            <div className="row">
                <div className="col-md-6">
                    <h3>{strLeague}</h3>
                    <p> <FontAwesomeIcon icon={faHourglassStart} />Founded:{dateFirstEvent}</p>
                    <p> <FontAwesomeIcon icon={faFlag} />Country:{strCountry}</p>
                    <p> <FontAwesomeIcon icon={faFutbol} />Sports Type:{strSport} </p>
                    <p> <FontAwesomeIcon icon={faVenusMars} />Gender:{strGender}</p>


                </div>
                <div className=" badge div col-md-5">

                    <img src={strBadge} alt="" />
                </div>
            </div>
            <div className="team-details d-flex bd-highlight image-position">
                {
                    strGender === 'Male' ? <img src="https://i.ibb.co/DbSDtxL/male.png" alt="" /> : <img src="https://i.ibb.co/Vq288xw/female.png" alt="" />

                }

                <p> {strDescriptionEN}</p>
            </div>
            <div className="icon">
                <a href={`https://${strFacebook}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/Zf2wFGR/Facebook.png" alt="" /> </a>
                <a href={`https://${strTwitter}`} target="_blank" rel="noreferrer" >  <img src="https://i.ibb.co/1bvqkFV/Twitter.png" alt="" /> </a>
                <a href={`https://${strYoutube}`} target="_blank" rel="noreferrer" ><img src="https://i.ibb.co/WKtmPjd/YouTube.png" alt="" /> </a>
            </div>



        </Container>
    );
};

export default TeamDetails;
