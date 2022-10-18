import { gql } from "@apollo/client"

export const GET_FIRST_ARTICLES_WITH_IMG = gql`
  query getFirstPageArticles {
    firstPageArticles {
      id
      author
      createdAt
      score
      updatedAt
      title
      text
      type
      url
      imageLink @client
    }
  }
`
