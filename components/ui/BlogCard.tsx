import React from "react"
import { ArticleIcon } from "../home-page/Elements"
import {
  Card,
  CardDesc,
  CardImg,
  CardImgWrapper,
  CardLink,
  CardText,
  CardTitle,
  DeleteIcon,
  EditIcon,
} from "./Elements"
import { Waypoint } from "react-waypoint"
import { Article } from "../../types/Articles"

interface BlogCardProps {
  entry: Article
  index: number
  scrollCallback: () => void
  value: string
  listLength: number
  openForm: () => void
  deleteArticle: (id: string) => any
}

const BlogCard = ({
  entry,
  index,
  scrollCallback,
  value,
  listLength,
  openForm,
  deleteArticle,
}: BlogCardProps) => {
  return (
    <Card isDark={value}>
      <EditIcon onClick={openForm} />
      <DeleteIcon
        onClick={() => {
          deleteArticle(entry.id)
        }}
      />
      <CardImgWrapper>
        {entry.imageLink ? (
          <CardImg
            src={entry.imageLink}
            alt="article image"
            onError={(image: any) => {
              image.src =
                "https://res.cloudinary.com/conversion-rate-experts/image/upload/w_auto,dpr_auto,c_scale,f_auto,q_auto/Man-at-a-buffet-bar.jpg"
            }}
          />
        ) : (
          <ArticleIcon />
        )}
      </CardImgWrapper>

      <CardText>
        <CardTitle>{entry.title}</CardTitle>
        <CardDesc>{entry.text}</CardDesc>
        <CardLink href={entry.url}>READ THIS ARTICLE</CardLink>
      </CardText>

      {index === listLength - 5 && <Waypoint onEnter={scrollCallback} />}
    </Card>
  )
}

export default BlogCard
