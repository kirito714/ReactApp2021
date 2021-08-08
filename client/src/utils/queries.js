import { gql } from '@apollo/client';

export const GET_ME = gql`
    query get_me {
        me {
            saveConcert {
                concertId
                title
                description
                venue
                date
            }
            
        }
    }
`;
