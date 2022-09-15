import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";


function Detailfoto() {
  const [DataDetailfoto, setDataDetailfoto] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getDetailfoto();
    }, [])

    function getDetailfoto() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/image-gallery/" + slug).then(function (response) {
            setDataDetailfoto(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataDetailfoto)
    return (
        <>
        <NavigationBar/>
        { console.log('DataDetailfoto', DataDetailfoto) }
        {
            (DataDetailfoto != null) ? 
            <>
            <div className='img text-center mt-5'>
            <img
                src={DataDetailfoto[0].image_file_data}>
            </img>
        </div>
        <div className='text-center'>
            <p className='mt-5'>test
                {DataDetailfoto[0].description_gallery}
            </p>
        </div></>  : ''
        }
            <Bawah/>
        </>
    );
}
export default Detailfoto;