import { useQuery } from "@apollo/client"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "styled-components"
import useDarkMode from "use-dark-mode"
import { v4 as uuidv4 } from "uuid"
import { ArticleImagesVar } from "../../gql/client"
import { GET_FIRST_ARTICLES_WITH_IMG } from "../../gql/queries/firstArticles"
import { GET_PAGE_ARTICLES } from "../../gql/queries/moreArticles"
import { client } from "../../pages"
import { pageArticlesResponse } from "../../static/backup_data"
import { ThemeType } from "../../styles/ThemeConfig"
import { Article } from "../../types/Articles"
import BlogForm from "../blog-form"
import BlogCard from "../ui/BlogCard"
import {
  ActiveCategory,
  AddBlogButton,
  BlogCategoryBar,
  BlogCategoryLi,
  BlogContent,
  BlogH1,
  BlogHeader,
  BlogList,
  BlogSubtitle,
  LoadingSpinner,
} from "./Elements"

interface formProps {
  title: string
  description: string
  image: string
  link: string
  entry: string
  id?: string
}

const Blogs = () => {
  const [isFetchingMoreArticles, setIsFetchingMoreArticles] = useState(false)
  const { value } = useDarkMode()
  const { data } = useQuery(GET_FIRST_ARTICLES_WITH_IMG)
  const [page, setPage] = useState(1)
  const [showModal, setShowModal] = useState(false)
  const [formDefaults, setFormDefaults] = useState({
    defaultTitle: "",
    defaultDescription: "",
    defaultImage: "",
    defaultLink: "",
    id: "",
  })
  const { data: moreData } = useQuery(GET_PAGE_ARTICLES, {
    variables: {
      page: page,
    },
  })
  const theme = useTheme() as ThemeType

  const closeModal = () => {
    setShowModal(false)
  }

  const scrollCallback = async () => {
    if (!isFetchingMoreArticles && page <= 10) {
      setIsFetchingMoreArticles(true)

      const newData = !moreData?.retrievePageArticles
        ? pageArticlesResponse[page - 1].data.retrievePageArticles.map(
            (item, index) => {
              return {
                ...item,
                id: item.id + `page${page - 1}-item${index}`,
                __typename: "Article",
              }
            }
          )
        : moreData.retrievePageArticles

      const request = {
        method: "POST",
        body: JSON.stringify({
          moreData: newData,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const res = await fetch("/api/getArticleImages", request)
      const { images } = await res.json()

      ArticleImagesVar({ ...ArticleImagesVar(), ...images })

      client.writeQuery({
        query: GET_FIRST_ARTICLES_WITH_IMG,
        data: {
          firstPageArticles: [...data.firstPageArticles, ...newData],
        },
      })
      setPage((currentPage) => currentPage + 1)
      setIsFetchingMoreArticles(false)
    }
  }

  useEffect(() => {
    const body = document.querySelector("body")!
    body.style.overflow = showModal ? "hidden" : "auto"
  }, [showModal])

  const handleSubmit = ({ title, description, link, image, id }: formProps) => {
    if (id) {
      const articleToUpdate = data.firstPageArticles.find(
        (article: Article) => article.id === id
      )
      client.writeQuery({
        query: GET_FIRST_ARTICLES_WITH_IMG,
        data: {
          firstPageArticles: [
            ...data.firstPageArticles.map((item: Article) => {
              if (item.id == id) {
                ArticleImagesVar({ ...ArticleImagesVar(), [id]: image })
                return {
                  ...item,
                  title,
                  text: description,
                  url: link,
                  updatedAt: new Date(Date.now()).toISOString(),
                }
              }
              return item
            }),
          ],
        },
      })
      console.log("index of editing article:", articleToUpdate)
    } else {
      const newId = uuidv4()
      ArticleImagesVar({ ...ArticleImagesVar(), [newId]: image })
      client.writeQuery({
        query: GET_FIRST_ARTICLES_WITH_IMG,
        data: {
          firstPageArticles: [
            {
              author: "admin",
              createdAt: new Date(Date.now()).toISOString(),
              id: newId,
              imageLink: image,
              score: 1,
              text: description,
              title,
              type: "story",
              updatedAt: new Date(Date.now()).toISOString(),
              url: link,
              __typename: "Article",
            },
            ...data.firstPageArticles,
          ],
        },
      })
    }
  }

  return (
    <BlogContent>
      <AnimatePresence initial={false}>
        {showModal && (
          <BlogForm
            handleSubmit={handleSubmit}
            closeModal={closeModal}
            {...formDefaults}
            isdark={value.toString()}
          />
        )}
      </AnimatePresence>
      <BlogHeader>
        <BlogSubtitle>Discover more about PMD articles</BlogSubtitle>

        <BlogH1>Explore the PMD Journal</BlogH1>
      </BlogHeader>

      <BlogCategoryBar isDark={value.toString()}>
        <BlogCategoryLi>Latest Articles</BlogCategoryLi>
        <ActiveCategory>All</ActiveCategory>
        <BlogCategoryLi>Trending</BlogCategoryLi>
        <BlogCategoryLi>Funny</BlogCategoryLi>
        <BlogCategoryLi>Best Authors</BlogCategoryLi>
        <BlogCategoryLi>New</BlogCategoryLi>
        <BlogCategoryLi>Top</BlogCategoryLi>
      </BlogCategoryBar>

      <BlogList>
        <AddBlogButton
          onClick={() => {
            setFormDefaults({
              defaultTitle: "",
              defaultDescription: "",
              defaultImage: "",
              defaultLink: "",
              id: "",
            })
            setShowModal(true)
          }}
        >
          ADD BLOG
        </AddBlogButton>
        {data.firstPageArticles.map((entry: Article, index: number) => {
          return (
            <BlogCard
              listLength={data.firstPageArticles.length}
              key={entry.id}
              entry={entry}
              index={index}
              scrollCallback={scrollCallback}
              value={value.toString()}
              openForm={() => {
                setFormDefaults({
                  defaultTitle: entry.title!,
                  defaultDescription: entry.text!,
                  defaultImage: entry.imageLink!,
                  defaultLink: entry.url!,
                  id: entry.id,
                })
                setShowModal(true)
              }}
              deleteArticle={(id: string) => {
                console.log(id)

                client.writeQuery({
                  query: GET_FIRST_ARTICLES_WITH_IMG,
                  data: {
                    firstPageArticles: [
                      ...data.firstPageArticles.filter(
                        (item: Article) => item.id != id
                      ),
                    ],
                  },
                })
              }}
            />
          )
        })}
        <LoadingSpinner color={theme.accent} loading={isFetchingMoreArticles} />
      </BlogList>
    </BlogContent>
  )
}

export default Blogs
