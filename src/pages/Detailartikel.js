import {React, useState, useEffect} from 'react';
import {Card, Row, Container} from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import { artikelDetail } from '../Apinya';

const ArtikelFull = () => {
    const {id} = useParams();
    const [FullArtikel, setFullArtikel] = useState([]);
    useEffect(() => {
        getFullArtikel();
        return () => {
            setFullArtikel(null);
        };
    }, []);

    function getFullArtikel() {
        const axios = require("axios");
        axios
            .get(artikelDetail + id)
            .then(function(response) {
                setFullArtikel(response.data.data);
                console.log(response.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    console.log(id);

    return (
        <>
            <Row className='artikel-row'>
                <NavigationBar />
                <div>
                    <h1 className='artikel-header'>{FullArtikel.title}</h1>
                    <img src={FullArtikel.image_file_data} />
                    <text>{FullArtikel.content}</text>
                </div>
                <Bawah />
            </Row>: ''
        </>
    )
}

export default ArtikelFull;