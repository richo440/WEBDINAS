import React, { useEffect, useState } from "react";
import { Card,Row } from "react-bootstrap";
import axios from "axios";

import '../style/profil.css';
import '../style/artikel.css';
import { instansi } from "../Apinya";

const Profil = () => {

    const [newsCard, getNewsCard] = useState(null)
    const widthPicture = '24rem'


    useEffect(() => {
        axios.get(instansi)
            .then(function (response) {

                getNewsCard(response.data.data)
                console.log('response.data.data');
                console.log(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    return (
      <Row>
        <div className="all">
            
            <h1 className="profil-header" style={{color:"black"}}>__PROFIL__</h1>

                {newsCard != null ? <div className="aparat">

                    <Card style={{ width: widthPicture }} className='card-aparat' >
                        <Card.Img variant="top" src={newsCard.foto_kepala} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_kepala}</Card.Title>
                            
                        </Card.Body>
                        <Card.Text className="body-card">Kepala</Card.Text>
                    </Card>

                    <Card style={{ width: widthPicture }} className='card-aparat' >
                        <Card.Img variant="top" src={newsCard.foto_wakil_kepala} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_wakil_kepala}</Card.Title>
                            

                        </Card.Body>
                        <Card.Text className="body-card">Wakil Kepala</Card.Text>
                    </Card>

                    <Card style={{ width: widthPicture }}  >
                        <Card.Img variant="top" src={newsCard.foto_sekretaris} className="image" />
                        <Card.Body className="body-card">
                            <Card.Title className="title-card">{newsCard.nama_sekretaris}</Card.Title>
                            

                        </Card.Body>
                        <Card.Text className="body-card">Sekretaris</Card.Text>
                    </Card>

                </div>

                    : <p>Loading</p>
                }


            
        </div>
        </Row>
    );
}

export default Profil;