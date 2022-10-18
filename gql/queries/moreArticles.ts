import { gql } from "@apollo/client"

export const GET_PAGE_ARTICLES = gql`
  query GetPageArticles($page: Int!) {
    retrievePageArticles(page: $page) {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
    }
  }
`
