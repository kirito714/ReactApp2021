import React, { useState, useEffect } from "react";
import SearchConcerts from "../components/SearchConcert";

// import Auth from "../utils/auth";
// import { saveConcertIds } from "../utils/localStorage";
// import { SearchConcertData } from "../utils/API";

// import { useMutation, useQuery } from "@apollo/client";
// import { GET_ME } from "../utils/queries";
// import { SAVE_CONCERT } from "../utils/mutations";

export default function ProfilePage() {
  return (
    <>
      <h1>Profile Landing Page!</h1>
      <SearchConcerts />
    </>
  );
}


