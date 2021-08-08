import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
          _id 
          username
         }
      }
  }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_CONCERT = gql`
   mutation saveConcert($title: String!, $description: String!, $venue: String!, $date: String!) {
       saveConcert(title: $title, description: $description, venue: $venue, date: $date ) {
           saveConcert {
               title
           }
       }
   }
`;

export const REMOVE_CONCERT = gql`
    mutation removeConcert($bookId: String!) {
        removeConcert(bookId: bookId) {
            saveConcert{
                bookId
            }
        }
    }


`;
