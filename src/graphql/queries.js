/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRSVP = /* GraphQL */ `
  query GetRSVP($id: ID!) {
    getRSVP(id: $id) {
      id
      Name
      numberofpeople
      email
      dietary
      accept
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRSVPS = /* GraphQL */ `
  query ListRSVPS(
    $filter: ModelRSVPFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRSVPS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        numberofpeople
        email
        dietary
        accept
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFamilymoon = /* GraphQL */ `
  query GetFamilymoon($id: ID!) {
    getFamilymoon(id: $id) {
      id
      destination
      image
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFamilymoons = /* GraphQL */ `
  query ListFamilymoons(
    $filter: ModelFamilymoonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilymoons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        destination
        image
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getIntro = /* GraphQL */ `
  query GetIntro($id: ID!) {
    getIntro(id: $id) {
      id
      titel
      imageUrl
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listIntros = /* GraphQL */ `
  query ListIntros(
    $filter: ModelIntroFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIntros(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        titel
        imageUrl
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSnaps = /* GraphQL */ `
  query GetSnaps($id: ID!) {
    getSnaps(id: $id) {
      id
      snap
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listSnaps = /* GraphQL */ `
  query ListSnaps(
    $filter: ModelSnapsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSnaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        snap
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
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
