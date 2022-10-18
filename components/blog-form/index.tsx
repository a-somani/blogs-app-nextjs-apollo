import {
  ModalOverlay,
  ModalContainer,
  CloseButtonWrapper,
  CloseButton,
  InputField,
  SubmitButton,
  Label,
  InputLine,
  InputBox,
} from "./Elements"
import { useState } from "react"

interface BlogFormProps {
  closeModal: () => void
  isdark: string | undefined
  defaultTitle: string | undefined
  defaultDescription: string | undefined
  defaultImage: string | undefined
  defaultLink: string | undefined
  handleSubmit: (params: any) => void
  id: string
}

const BlogForm = ({
  closeModal,
  isdark,
  defaultTitle,
  defaultDescription,
  defaultImage,
  defaultLink,
  id,
  handleSubmit,
}: BlogFormProps) => {
  const [title, setTitle] = useState(defaultTitle)
  const [description, setDescription] = useState(defaultDescription)
  const [image, setImage] = useState(defaultImage)
  const [link, setLink] = useState(defaultLink)

  const handleFormSubmit = () => {
    handleSubmit({ title, description, image, link, id })
    setTitle("")
    setDescription("")
    setImage("")
    setLink("")
    closeModal()
  }

  return (
    <ModalOverlay
      onClick={closeModal}
      isdark={isdark}
      initial={{ opacity: 0, top: "-100%" }}
      animate={{ opacity: 1, top: "0px" }}
      exit={{ top: "-100%", opacity: 0 }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 250,
        duration: 0.4,
      }}
    >
      <ModalContainer onClick={(e: Event) => e.stopPropagation()}>
        <InputField>
          <Label>Title</Label>
          <InputLine
            type="text"
            value={title}
            onChange={(e: any) => {
              setTitle(e.target.value)
            }}
          />
        </InputField>
        <InputField>
          <Label>Description</Label>
          <InputBox
            cols={100}
            rows={6}
            value={description}
            onChange={(e: any) => {
              setDescription(e.target.value)
            }}
          />
        </InputField>
        <InputField>
          <Label>Image Link</Label>
          <InputLine
            type="text"
            value={image}
            onChange={(e: any) => {
              setImage(e.target.value)
            }}
          />
        </InputField>
        <InputField>
          <Label>Article Link</Label>
          <InputLine
            type="text"
            value={link}
            onChange={(e: any) => {
              setLink(e.target.value)
            }}
          />
        </InputField>
        <SubmitButton isdark={isdark} onClick={handleFormSubmit}>
          Save
        </SubmitButton>
        <CloseButtonWrapper>
          <CloseButton isdark={isdark} onClick={closeModal} />
        </CloseButtonWrapper>
      </ModalContainer>
    </ModalOverlay>
  )
}

export default BlogForm
