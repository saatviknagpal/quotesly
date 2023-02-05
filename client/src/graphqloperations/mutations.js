import { gql } from "@apollo/client";
export const SIGNUP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupUser(userNew: $userNew) {
      firstName
    }
  }
`;

export const LOGIN_USER = gql`
  mutation signInUser($userSign: UserSigninInput!) {
    user: signInUser(userSign: $userSign) {
      token
    }
  }
`;

export const CREATE_QUOTE = gql`
  mutation create($name: String!) {
    quote: createQuote(name: $name)
  }
`;

export const EDIT_QUOTE = gql`
  mutation updateQuoteById($updateUser: UserUpdateInput!) {
    editQuote(updateQuote: $updateUser)
  }
`;

export const DELETE_QUOTE = gql`
  mutation deleteQuote($delete: ID!) {
    deleteQuote(_id: $delete)
  }
`;
