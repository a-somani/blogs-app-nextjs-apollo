import styled from "styled-components"
import ShareArticle from "../../assets/share-article.svg"
import ArticleSvg from "../../assets/article-icon.svg"
import ClipLoader from "react-spinners/ClipLoader"

export const HeroContent = styled.div`
  margin: 0px;
  padding-top: 48px;
  position: relative;
  display: grid;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  height: 525px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    height: min-content;
  }
`
export const Graphic = styled(ShareArticle)`
  justify-self: right;
  height: 70%;
  padding: 24px 64px;
  @media screen and (max-width: 1024px) {
    width: 80%;
    max-width: 400px;
    scale: initial;
    height: auto;
    justify-self: center;
    padding-top: 0px;
    padding-bottom: 64px;
    margin-top: -24px;
  }
  @media screen and (max-width: 480px) {
    margin-top: 12px;
  }
`

export const ArticleIcon = styled(ArticleSvg)`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  fill: ${(props) => props.theme.accent};
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 100px;
  align-items: left;
  text-align: center;
  position: relative;
  width: fit-content;
  padding-top: 24px;
  box-sizing: border-box;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0px 10%;
    margin: 0px;
    align-items: center;
  }
`
export const H1 = styled.div`
  color: ${(props) => props.theme.text2};
  font-size: 64px;
  text-align: left;
  font-weight: 800;
  margin: 0px;

  @media screen and (max-width: 1024px) {
    font-size: 48px;
    text-align: center;
  }
`
export const Subtitle = styled(H1)`
  color: ${(props) => props.theme.text};
  margin-top: 12px;
  line-height: 30px;
  font-size: 19px;
  font-weight: 400;
  width: 100%;
  letter-spacing: 0.5px;
  @media screen and (max-width: 1024px) {
    margin-top: 16px;
    font-size: 16px;
  }
`

export const BlogContent = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.secondary};
`

export const AddBlogButton = styled.div`
  color: ${(props) => props.theme.text};
  font-size: 16px;
  margin: 24px;
  margin-bottom: 48px;
  padding-bottom: 2px;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: 1px;
  border-bottom: ${(props) => `1.5px solid ${props.theme.text}`};
`

export const BlogHeader = styled.div`
  padding-top: 106px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -16px;
  width: 100%;
`
export const BlogSubtitle = styled.div`
  color: rgb(204, 131, 92);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.4px;
  cursor: pointer;
  padding: 0px 4px;
`

export const BlogH1 = styled.div`
  font-size: 50px;
  font-weight: 600;
  letter-spacing: 2px;
  padding: 36px 12px 16px 12px;
  z-index: 2;
  color: ${(props) => props.theme.text2};
  @media screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media screen and (max-width: 480px) {
    font-size: 20px;
    text-align: center;
  }
`

export const BlogCategoryBar = styled.div<any>`
  position: relative;
  background: ${(props) => props.theme.secondary};
  z-index: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  padding: 24px 36px;
  justify-content: space-between;
  border-bottom: ${(props) =>
    props.isdark == "true"
      ? `solid 2px ${props.theme.accent}`
      : `solid 2px ${props.theme.accent}`};

  @media screen and (max-width: 1024px) {
    padding: 24px 24px;
  }
`
export const BlogCategoryLi = styled.div`
  padding: 0px 0px;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 19px;
  text-align: center;
  letter-spacing: 0.5px;
  cursor: pointer;
  list-style-type: none;
  color: ${(props) => props.theme.text3};
  @media screen and (max-width: 1024px) {
    padding: 0px 12px;
    font-size: 12px;
  }
  min-width: 120px;
  margin: 0px 8px;
`
export const ActiveCategory = styled(BlogCategoryLi)`
  color: ${(props) => props.theme.text};
  min-width: 80px;
`

export const BlogList = styled.li`
  padding-top: 24px;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadingSpinner = styled(ClipLoader)`
  display: block;
  margin: 36px;
  width: 80px;
  height: 80px;
`
