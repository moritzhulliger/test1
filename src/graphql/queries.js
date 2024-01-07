/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpecialDayElement = /* GraphQL */ `
  query GetSpecialDayElement($id: ID!) {
    getSpecialDayElement(id: $id) {
      id
      Title
      Description
      Image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSpecialDayElements = /* GraphQL */ `
  query ListSpecialDayElements(
    $filter: ModelSpecialDayElementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecialDayElements(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Title
        Description
        Image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
