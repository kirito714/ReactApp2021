import { gql } from '@apollo/client';

export const GET_ME = gql`
    query get_me {
        me {
            savedConcert {
                title
                description
                venue
                place
                date
            }
            
        }
    }
`;
