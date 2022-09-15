import { React, useState, UseEffect, useEffect } from 'react';
import { Card, Button, Row } from 'react-bootstrap';
import '../style/artikel.css';
import { artikelMain } from '../Apinya';
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";

const Artikel = () => {
    const [DataArtikel, setDataArtikel] = useState(null);
    useEffect(() => {
        getArtikel();
        return () => {
            setDataArtikel(null);
        };
    }, []);

    function getArtikel() {
        const axios = require("axios");
        axios
            .get(artikelMain)
            .then(function(response) {
                setDataArtikel(response.data.data.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    return (
        <>
        <NavigationBar/>
        <h1 className='berita-header'> INI ARTIKEL</h1>
        {(DataArtikel != null) ? 
            <Row className='artikel-row'>
                {
                    DataArtikel && DataArtikel.map((item, index) => {
                    return (
                            <Card className='artikel-card'>
                                <Card.Body className='card-body'>
                                    <Card.Img className='card-image' src={item.image_file_data} />
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.intro}</Card.Text>
                                    <Button href={`/ArtikelFull/${item.id}`}>Detail</Button>
                                </Card.Body>
                            </Card>
                    )
                    })
                }
                <Bawah/>
            </Row>: ''

        }
        </>
    );
};

export default Artikel;