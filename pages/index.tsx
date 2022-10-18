import type { NextPage } from "next"
import Head from "next/head"
import Blogs from "../components/home-page/Blogs"
import Hero from "../components/home-page/Hero"
import {
  addApolloState,
  ArticleImagesVar,
  initializeApollo,
} from "../gql/client"
import { GET_FIRST_ARTICLES_WITH_IMG } from "../gql/queries/firstArticles"
import { PageWrapper } from "../styles/ThemeConfig"
import { Article } from "../types/Articles"
import ogs from "open-graph-scraper"

export const client = initializeApollo()

interface HomeProps {
  images: Record<string, string>
  isOpen: boolean
}

const Home: NextPage = ({ isOpen, images }: HomeProps | any) => {
  ArticleImagesVar(images)
  return (
    <PageWrapper sidebarIsOpen={isOpen}>
      <Head>
        <title>PMD Blogs</title>
        <meta name="PMD Blogs" content="test blogs app" />
        <link rel="icon" href="/newspaper.ico" />
      </Head>
      <Hero />
      <Blogs />
    </PageWrapper>
  )
}

export default Home

export async function getStaticProps() {
  const client = initializeApollo()

  const { data } = await client.query({
    query: GET_FIRST_ARTICLES_WITH_IMG,
  })

  const images: Record<string, string> = {}

  const findAllImages = data.firstPageArticles.map(async (entry: Article) => {
    const url = entry.url
    const options = {
      url,
      headers: {
        "User-Agent":
          " Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
      },
      customMetaTags: [
        {
          multiple: false, // is there more than one of these tags on a page (normally this is false)
          property: "hostname", // meta tag name/property attribute
          fieldName: "hostnameMetaTag", // name of the result variable
        },
      ],
    }

    try {
      const scrapeData = await ogs(options)
      const { error, result } = scrapeData
      if (!error && result?.ogImage) {
        if (Array.isArray(result.ogImage)) {
          images[entry.id] = result.ogImage[0].url
        } else {
          images[entry.id] = result.ogImage.url
        }
      } else {
        images[entry.id] = ""
      }
      return
    } catch (error) {
      images[entry.id] = ""
      return
    }
  })

  const foundImages = await Promise.allSettled(findAllImages)

  return addApolloState(client, {
    props: {
      images,
    },
  })
}
