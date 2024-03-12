import { useState } from "react";
import { useEffect } from "react";
import Photo from "./Photo";
import './Photo.css'



const Photos = () => {

    const [photos, setPhotos] = useState([])


    useEffect( () =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setPhotos(data));
    },[])





    return (
        <div className="photo-container">

            

            {
                photos.map(photo => <Photo photo={photo} key = {photo.id}></Photo>)
            }
            
        </div>
    );
};

export default Photos;