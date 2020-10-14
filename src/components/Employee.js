import { Query } from 'react-apollo';
import gql from 'graphql-tag'
import UserAvatar from './UserAvatar';
import Punches from './Punches';

const EMPLOYEE_QUERY = gql`
    query Employee($id: ID!) {
        employee(id: $id) {
            
        }
    }`