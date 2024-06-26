import { gql } from '@apollo/client';

const getProfilesByEmployee = gql`
    query {
        Tools: getGropsByName {
            profile_id
            Profile: rProfile {
                tool_id
                tool {
                    path
                    configuration
                    order_by
                    tool_father {
                        tool_id
                        name
                        configuration
                        description
                    }
                }
            }
        }
    }
`;
const LogInQuery = gql`
    query Login($credentials: loginInput) {
        ResponseLogin: Login(credentials: $credentials) {
            refresh_token
            access_token
            expires_in
            token_type
            error
            error_description
        }
    }
`;

export { getProfilesByEmployee, LogInQuery };
