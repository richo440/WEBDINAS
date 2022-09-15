import {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Bawah from "../components/Bawah";


function Detaildokumen() {
  const [DataDetaildokumen, setDataDetaildokumen] = useState(null);
    const { slug } = useParams();


    useEffect(() => {
        getDetaildokumen();
    }, [])

    function getDetaildokumen() {
        const axios = require('axios');
        axios.get("http://adminmesuji.embuncode.com/api/dokumen/" + slug).then(function (response) {
            setDataDetaildokumen(response.data.data);
            console.log(response.data)
        }).catch(function (error) {

        }).then(function () {

        });
    }

    console.log(Detaildokumen)
    return (
        <>
        <NavigationBar/>
            {
                (DataDetaildokumen != null) ?
                <div className="detailDoc-page">
                    <div className='split-view-detailDoc'>
                    <div className='"detailDoc-title"'>
                        <article>
                            {DataDetaildokumen[0].description_dokumen}
                        </article>
                    </div>
                    <div className="the-file-document">
                        <iframe
                            src={"data:application/pdf;base64," + DataDetaildokumen[0].dokumen_file_data}
                            frameBorder="0"
                            title={DataDetaildokumen[0].dokumen_file_data}
                            scrolling="auto"
                            height="100%"
                            width="100%"
                        ></iframe>
                    </div>
                    </div>
                </div> : ''
            }
            <Bawah/>
        </>
    );
}
export default Detaildokumen;