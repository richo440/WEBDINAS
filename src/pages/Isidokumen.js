import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";
import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from "react";
import { dokumenList } from '../Apinya';

function Dokumen() {
  const [DataResponse, setDataResponse] = useState(null);

  useEffect(() => {
    Dokumen();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function Dokumen() {
    const axios = require('axios');
    axios.get(dokumenList).then(function (response) {
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
         
              <div className="document-page">
                <div className="split-view-document">
                <div className="row">
                <div className="the-document">
                <h1 className='berita-header'> INI DOKUMEN</h1>
                  <br></br>
                  <br></br>
                </div>
                
        {
          DataResponse && DataResponse.map((index) => {
            return (
              <div className="the-sub-document">
                <div className="document-name">
                  <div className="document-file-name">
                  <div className="document-file ">
                <Card>
                  DOKUMEN
                    <Card>
                <Card.Body>
                    <Card.Title>{index.dokumen_item[0].dokumen_file_name}</Card.Title>
                    <Card.Text>{index.description}</Card.Text>  
                    <Button variant="link" href={`/Detaildokumen/${index.slug}`}>Read More</Button>
                </Card.Body>

          </Card>
          </Card>
          </div>
          </div>
          </div>
          </div>
          
            )
          })
        }
        </div>
        </div>
        </div>: ''
      }
      <br></br>
      <Bawah/>
      </>
  );
  
}

export default Dokumen;