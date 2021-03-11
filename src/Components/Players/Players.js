import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Players = (props) => {
    const { strLeagueAlternate, strSport, idLeague } = props.players;

    return (



        <div className="bg-light col-md-4 p-4">
            <Card className="d-grid gap-1" style={{ width: '20rem' }}>
                {/* <Card.Img variant="top" src="../../images/image4.png" /> */}

                <Card.Body>
                    <Card.Title> {strLeagueAlternate}</Card.Title>
                    <Card.Text> Sports Type:{strSport}

                    </Card.Text>

                    <Link to={"/" + idLeague}>
                        <Button variant="primary" ><FontAwesomeIcon icon={faFutbol} />{"   "} Explore</Button>
                    </Link>


                </Card.Body>
            </Card>

        </div>

    );
};

export default Players;