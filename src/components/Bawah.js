import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
    Row,
    Col as Column,
    Nav,
} from 'react-bootstrap';
import '../style/landingPage.css';
import Box from '@mui/material/Box';

function Bawah(){
  const [BawahData, setBawahData] = useState([]);
  useEffect(() => {
      axios
        .get("http://adminmesuji.embuncode.com/api/instansi/detail/40")
        .then(function (Bawah) {
          setBawahData(Bawah.data.data);
          console.log("console header: " + Bawah.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

  return(
    <Box className='Box'>
                <div id="bawah" className='footer-wide'>
                <br></br>
    <>
      <Row>
                        <Column className='List'>
                            <h3 className='Column'>ALAMAT</h3>
                            <p className="text">{BawahData.alamat}</p>
                            <br></br>
                        </Column>

                        <Column className='List'>
                            <h3 className='Column'>EMAIL</h3>
                            <p className="text">{BawahData.email}</p>
                            <br></br>
                        </Column>
                        
                        <Column className='List'>
                            <h3 className='Column'>CONTACT US</h3>
                            <Nav.Link href="https://api.whatsapp.com/send/?phone=6281919862740&text&type=phone_number&app_absent=0">{BawahData.nomor_telepon}</Nav.Link>
                            <Nav.Link href="https://api.whatsapp.com/send/?phone=6282269647389&text&type=phone_number&app_absent=0">{BawahData.nomor_telepon}</Nav.Link>
                            <br></br>
                        </Column>
                        <hr/>
                        <p className="head-haha">
            &copy;{new Date().getFullYear()} DINAS PERIKANAN TULANG BAWANG
          </p>
          <p className="head-haha">
         Richo Fajar Pratama PKL Mikrodata
          </p>
          <p className="head-haha">
         --__--
          </p>
                    </Row>
    </>
    </div>
    </Box>
  );
}

export default Bawah;