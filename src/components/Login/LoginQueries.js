import { gql } from "@apollo/client";

const getProfilesByEmployee = gql`
  query {
    Gropus: getAllUsers {
      user_id
      profile_id
      profile {
        created_on
        name
      }
    }
  }
`;

export { getProfilesByEmployee };
