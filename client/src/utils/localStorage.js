export const getSavedConcertIds = () => {
    const savedConcertIds = localStorage.getItem('saved_concerts')
      ? JSON.parse(localStorage.getItem('saved_concerts'))
      : [];
  
    return savedConcertIds;
  };
  
  export const saveConcertIds = (concertIdArr) => {
    if (concertIdArr.length) {
      localStorage.setItem('saved_concerts', JSON.stringify(concertIdArr));
    } else {
      localStorage.removeItem('saved_concerts');
    }
  };
  
  export const removeConcertId = (concertId) => {
    const savedConcertIds = localStorage.getItem('saved_concerts')
      ? JSON.parse(localStorage.getItem('saved_concerts'))
      : null;
  
    if (!savedConcertIds) {
      return false;
    }
  
    const updatedSavedConcertIds = savedConcertIds.filter((savedConcertId) => savedConcertId !== concertId);
    localStorage.setItem('saved_concerts', JSON.stringify(updatedSavedConcertIds));
  
    return true;
  };
  