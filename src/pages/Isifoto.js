import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import "../style/berita.css";

const Isifoto = () => {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Isifoto();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Isifoto() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=40').then(function (response) {
    setDataResponse(response.data.data.data);
    }).catch(function (error) {

    }).then(function () {

    });
  }

  console.log(DataResponse)
    return (
    <>
    <NavigationBar/>
      {
        (DataResponse != null) ? 
         
              <div className="row">
                <div className="berita-header">
                  <h1>Take a look at some of our Aktivities and Memories</h1>
                </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="card-foto">
              <div className="bg container-fluid mt-5">
                <div className="container">
                  <div className="text-center">
                  <div className="news-row">
                    <Card style={{ width: '25rem' }}>
                  <Card.Img variant="top" src={index.image_gallery_item[0].image_file_data} />
                                <Card.Body>
                                <Card.Text>
                                      {index.description}
                                </Card.Text>
                                <Button variant="link" href={`/Detailfoto/${index.slug}`}>Read More</Button>
                                </Card.Body>
                            </Card>
          </div>
          </div>
          </div>
          </div>
          </div>
            )
          })
        }
        </div>: ''
      }
      <br></br>
      <Bawah/>
        </>
    );
};

export default Isifoto;