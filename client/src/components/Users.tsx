import React from 'react';
import {gql, useQuery} from '@apollo/client';

const USERS_QUERY = gql`
query USERS_QUERY{
    users {
        id
        name
    }
}`

function Users() {
    return (
        <div>
            
        </div>
    );
}

export default Users;