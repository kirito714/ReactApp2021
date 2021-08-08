import { gql } from '@apollo/client';

export const GET_ME = gql`
    query get_me {
        me {
            saveConcert {
                title
                description
                venue
              
                date
            }
            
        }
    }
`;
