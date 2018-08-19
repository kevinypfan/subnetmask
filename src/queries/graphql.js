import gql from 'graphql-tag';

export const GET_POSTS = gql`
{
  posts {
    id
    title
    content
    person {
      id
      firstName
      lastName
      email
    }
  }
}
`;

export const ADD_PERSON = gql`
mutation($firstName: String!, $lastName: String!, $email: String!) {
  addPerson(firstName: $firstName, lastName: $lastName, email: $email ) {
    id
    firstName
    lastName
    email
    posts {
      id
      title
      content
    }
  }
}
`