import {React, useState, useEffect} from 'react';
import {Card, Row,} from 'react-bootstrap';
import { useParams,} from 'react-router-dom';
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import { newsDetail } from '../Apinya';

const BeritaFull = () => {
    const {id} = useParams();
    const [FullBerita, setFullBerita] = useState([]);
    useEffect(() => {
        getFullBerita();
        return () => {
            setFullBerita(null);
        };
    }, []);

    function getFullBerita() {
        const axios = require("axios");
        axios
            .get(newsDetail + id)
            .then(function(response) {
                setFullBerita(response.data.data);
                console.log(response.data);
            })
            .catch(function(error) {})
            .then(function() {});
    }
    console.log(id);

    return (
        <>
            <Row className='berita-row'>
                <NavigationBar />
                <div>
                    <Card>
                        <Card.Title className='berita-header'>{FullBerita.title}</Card.Title>
                        <Card.Img src={FullBerita.image_file_data} />
                        <Card.Text>{FullBerita.content}</Card.Text>
                    </Card>
                </div>
                <Bawah />
            </Row>: ''
        </>
    )
}

export default BeritaFull;