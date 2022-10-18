import type { NextApiRequest, NextApiResponse } from "next"
import { Article } from "../../types/Articles"
const ogs = require("open-graph-scraper")

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const moreData = req.body.moreData

  const images: Record<string, string> = {}

  const findAllImages = moreData.map(async (entry: Article) => {
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
        if (!images[entry.id].includes("http")) {
          images[entry.id] = entry.url + images[entry.id]
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

  return res.status(200).json({ images })
}

export default handler
