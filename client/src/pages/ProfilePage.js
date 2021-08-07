import React, { useState, useEffect } from 'react';
import Searchform from "../components/Searchform";

import Auth from '../utils/auth';

import { useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";


//FUNCTION TO CREATE SAVED CONCERTS CARDS ..................
const Profile = () => {

    //This will query our Database for our user information including,
    //the saved concerts
    //To access this data in JSX for the cards, it will be {userData.me.savedConcerts}
    // const { loading, data } = useQuery(GET_ME);
    // const userData = data;

    //JSX with cards and info for the concert
    return (
        <>
        <h1> This is the profile! </h1>
        <Searchform />
        </>
    );

}


// export default SearchConcerts;
export default Profile;