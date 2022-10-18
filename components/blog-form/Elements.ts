import styled from "styled-components"
import { BsXLg } from "react-icons/bs"
import { motion } from "framer-motion"

export const ModalOverlay = styled(motion.div)<any>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.isdark == "true" ? "rgb(0, 0, 0, 0.8)" : "rgb(255, 218, 190, 0.8)"};
  box-shadow: ${(props) =>
    props.isdark
      ? "0 0 400px 100px rgb(240, 230, 220, 0.05)"
      : "0 0 400px 100px rgb(255, 218, 190, 0.4)"};
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalContainer: any = styled.aside<any>`
  width: 90%;
  background: ${(props) =>
    props.isdark == "true" ? props.theme.background2 : props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 24px;
  height: 90%;
  position: absolute;
  border-radius: 12px;
  padding: 24px 60px;
  max-width: 800px;
  @media screen and (max-width: 480px) {
    padding: 24px;
    height: 100%;
    width: 100%;
  }
`

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 12px;
  width: 100%;
  max-width: 600px;
`
export const InputLine = styled.input<any>`
  border-radius: 4px;
  width: 100%;
  border: none;
  background: ${(props) =>
    props.isdark == "true" ? props.theme.background2 : props.theme.background};
  padding: 6px;
  border: 1px solid #ccc;
  outline: none;
  color: ${(props) => props.theme.text};
  &:focus {
    padding: 5px 6px;
    border: 2px solid ${(props) => props.theme.text2};
  }
`
export const InputBox = styled.textarea<any>`
  border-radius: 4px;
  width: 100%;
  border: none;
  background: ${(props) =>
    props.isdark == "true" ? props.theme.background2 : props.theme.background};
  padding: 6px;
  border: 1px solid #ccc;
  outline: none;
  color: ${(props) => props.theme.text};
  &:focus {
    padding: 5px 6px;
    border: 2px solid ${(props) => props.theme.text2};
  }
`

export const Label = styled.div`
  padding: 8px;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  text-align: left;
  font-size: 14px;
  padding-left: 4px;
`

export const CloseButton = styled(BsXLg)<any>`
  color: ${(props) => props.theme.text};
  padding: 8px;
  border-radius: 48px;
  width: 36px;
  height: 36px;
  opacity: 1;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.background2};
  }
`
export const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const SubmitButton = styled.button<any>`
  padding: 8px 32px;
  border-radius: 8px;
  margin: 12px;
  color: ${(props) => props.theme.background};
  background-color: #399c61;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isdark == "true"
      ? "0 0 10px 2px rgb(200, 200, 200, 0.15)"
      : "0 0 10px 2px rgb(100, 100, 100, 0.4)"};
  &:hover {
    background-color: ${(props) => props.theme.text3};
  }
  border: none;
`
