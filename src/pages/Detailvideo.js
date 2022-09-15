import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";


function Detailvideo() {
  const [DataDetailvideo, setDataDetailvideo] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getDetailvideo();
    }, [])

    function getDetailvideo() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/video-gallery/" + slug).then(function (response) {
            setDataDetailvideo(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(DataDetailvideo)
    return (
        <>
        <NavigationBar/>
        { console.log('DataDetailvideo', DataDetailvideo) }
        {
            (DataDetailvideo != null) ? 
            <>
            <div className='img text-center mt-5'>
            <img
                src={DataDetailvideo[0].image_file_data}>
            </img>
        </div>
        <div className='text-center'>
        <iframe
                    width="860"
                    height="615"
                    src={DataDetailvideo[0].video_url}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
        </div></>  : ''
        }
            <Bawah/>
        </>
    );
}
export default Detailvideo;