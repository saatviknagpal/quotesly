import { gql } from "@apollo/client";
export const GET_ALL_QUOTES = gql`
  query getAllQuotes {
    quotes {
      name
      by {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const GET_MY_PROFILE = gql`
  query getMyProfile {
    user: myProfile {
      firstName
      lastName
      email
      quotes {
        _id
        name
      }
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($userid: ID!) {
    user(_id: $userid) {
      _id
      firstName
      lastName
      email
      quotes {
        name
      }
    }
  }
`;

export const GET_QUOTE_BY_ID = gql`
  query getQuoteById($quoteid: ID!) {
    quote(_id: $quoteid) {
      name
    }
  }
`;
