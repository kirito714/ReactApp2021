import React, { useState, useEffect } from 'react';

import Auth from '../utils/auth';
import { saveConcertIds } from "../utils/localStorage";
import { searchConcertData } from "../utils/API";

import { useMutation, useQuery } from '@apollo/client';
import { GET_ME } from "../utils/queries";
import { SAVE_CONCERT } from '../utils/mutations';

// FUNCTION TO SEARCH CONCERTS AND CHOOSE WHICH TO SAVE ................
const SearchConcerts = () => {
    // create state to hold our returned API Data from predicthq
    const [searchedConcerts, setSearchedConcerts] = useState([]);
    // create state to hold our search field data (from the input field in the search form)
    const [searchInput, setSearchInput] = useState("");

    // create a state to hold the saved concertId to use for local storage
    // getSavedConcertIds is a function in localstorage.js to get the ids in local storage
    const [savedConcertIds, setSavedConcertIds] = useState(getSavedConcertIds());

    // Using the useEffect hook to save saveConcertIds list to localStorage
    useEffect(() => {
        //saveConcertIds is a function inside of localStorage.js
        //the savedConcertIds is the value from the useState (what is in local storage)
        return () => saveConcertIds(savedConcertIds);
    });

    //HANDLE FORM SUBMIT
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!searchInput) {
            return false;
        }

        try {
            //Use API function of searchConcertData in API.js to send GET resquest
            const response = await searchConcertData(searchInput);

            if(!response.ok) {
                throw new Error("Something went wrong!");
            }

            //JSON the repsonse for searchConcertData
            const { concertInfo } = await response.json()
            console.log(concertInfo);

            //Mapping over data we get back from API and 
            //getting each piece of info for our model
            const concertData = concertInfo.map((concert) => ({
                concertId: concert.id,
                title: concert.title,
                description: concert.description,
                place: concert.timezone,
                venue: concert.entities[0].name,
                date: concert.start,
            }));

            //updating useState
            setSearchedConcerts(concertData);
            // clearing searchInput
            setSearchInput("");

        } catch (err) {
            console.error(err);
        }

        //USE MUTATION TO UPDATE DATABASE
        const[saveConcert, { error }] = useMutation(SAVE_CONCERT, {
            //update the cache when mutation occurs
            update(cache, { data: { saveConcert } }) {
                try{
                    const cacheData = cache.readQuery({
                        query: GET_ME,
                    });

                    if (cacheData) {
                        cache.writeQuery({
                            query: GET_ME,
                            data: { savedBooks: [...cacheData.savedConcerts, saveConcert] },
                        });
                    }
                    
                } catch (err) {
                    console.log(err);
                }
            }
        });


        //SAVE BOOK TO MODEL/DATABASE
        const handleSaveConcert = async (concertId) => {
            //look through the searchedConcerts useState and 
            //find the concert that matches the concertId being passed through this function
            const concertToSave = searchedConcerts.find((concert) => concert.concertId === concertId );

            // get token from Auth.js
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            
            if (!token) {
                return false;
            }
        
            try {
                //use mutation function and pass in the concert info that needs to be saved
                const { data } = await saveConcert({
                    variables: {
                        ...concertToSave,
                    },
                });

                //if concert saves to user's account, save the concertId to state,
                // which will save in local storage
                setSavedConcertIds([ ...savedConcertIds, concertToSave.concertId])
            } catch (err) {
                console.error(` This is the catch block for handleSaveConcert ${err}`)
            }
        }

    };

    return {
        // JSX containing the form => 
            //handleFormSubmit onSubmit for searching concerts
        // JSX containing the search results as cards??? =>
            // handleSaveConcert onClick for saving the concert
    }

}


//FUNCTION TO CREATE SAVED CONCERTS CARDS ..................

const SavedConcerts = () => {

    //This will query our Database for our user information including,
    //the saved concerts
    //To access this data in JSX for the cards, it will be {userData.me.savedConcerts}
    const { loading, data } = useQuery(GET_ME);
    const userData = data;

    return (
        //JSX with cards and info for the concert
        <Card />
    );

}


export default SearchConcerts;
export default SavedConcerts;