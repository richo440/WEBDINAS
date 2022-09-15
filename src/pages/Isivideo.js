import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";

const Isivideo = () => {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Isivideo();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Isivideo() {
    const axios = require('axios');
    axios.get('http://adminmesuji.embuncode.com/api/video-gallery?instansi_id=2').then(function (response) {
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
         
              <div className="">
                <div className="berita-header">
                  <h1>Take a look at some of our Aktivities and Memories</h1>
                </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="card-card">
              <div className="bg container-fluid mt-5">
                <div className="container">
                  <div className="row">
                  <Card className='mt-4'>
                                <Card.Img variant="top" src={index.image_gallery_item[0].thumbnail_url} />
                                <Card.Body>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                       {index.description} 
                                </Card.Text>
                                <Button variant="link" href={`/Detailvideo/${index.slug}`}>Read More</Button>
                                </Card.Body>
                            </Card>
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

export default Isivideo;