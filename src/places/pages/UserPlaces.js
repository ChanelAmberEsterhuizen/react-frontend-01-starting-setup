import React from "react";
import PlaceList from "../components/PlaceList";
import {useParams} from 'react-router-dom'; 

const DUMMY_PLACES = [
    {
    id : 'p1',
    title : 'Empire', 
    description : 'Blah Blah ', 
    imageUrl: 'https://www.google.com/search?q=empire+building&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwj73qa8odn1AhVNKLkGHSONB9QQ_AUoAXoECAIQAw&biw=1366&bih=625&dpr=1#imgrc=xUnlo3rmeGUjaM',
    address: "20 dfks;ldmf ",
    location : {
        lat : 40.7484405 , 
        lng : -73.9878584
    },
    creator : 'u1'

    },


    {
        id : 'p2',
        title : 'Eiffel', 
        description : 'Blah Blah ', 
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg',
        address: "20 dfks;ldmf ",
        location : {
            lat : 40.7484405 , 
            lng : -73.9878584
        },
        creator : 'u2'
    
        }

] ; 
const UserPlaces = () => {
    const userId = useParams().userId ; 
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator == userId );
    return <PlaceList  items ={loadedPlaces} />  ; 
};
export default UserPlaces ; 