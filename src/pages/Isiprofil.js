import React, { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import axios from "axios";
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import '../style/profil.css';
import { instansi } from "../Apinya";

const Isiprofil = () => {

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
        <NavigationBar/>
        <div className="all">
            <div className="">
            <h1 className='berita-header'>PROFIL STRUKTUR</h1>

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
        </div>
        <Bawah/>
        </Row>
    );
}

export default Isiprofil;