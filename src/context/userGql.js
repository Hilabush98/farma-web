import { gql } from '@apollo/client';

const GET_Permission = gql`
    query ($name: String) {
        permissionTools: getGropsByName {
            profile_id
            Profile: rProfile {
                tool {
                    path
                    configuration
                }
            }
        }
    }
`;
const LogInQuery = `
    query Login($credentials: loginInput) {
        ResponseLogin: Login(credentials: $credentials) {
            refresh_token
            access_token
            expires_in
            token_type
            error_description
        }
    }
`;
export { GET_Permission, LogInQuery };
