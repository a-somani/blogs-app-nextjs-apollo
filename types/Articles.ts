export interface Article {
  id: string
  author: string
  createdAt: string
  score: string
  updatedAt: string
  title: string
  text: string
  type: string
  url: string
  imageLink?: string
}

export interface firstArticlesResponse {
  data: {
    firstPageArticles: Article[]
  }
}

export interface pageArticlesResponse {
  data: {
    retrievePageArticles: Article[]
  }
}
