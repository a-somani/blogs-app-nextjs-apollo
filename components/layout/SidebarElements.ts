import styled from "styled-components"
import { BsXLg } from "react-icons/bs"

export const Overlay = styled.aside<any>`
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.isdark == "true"
      ? "rgb(250, 223, 200, 0.1)"
      : "rgb(248, 208, 180, 0.3)"};
  box-shadow: ${(props) =>
    props.isdark
      ? "0 0 400px 100px rgb(250, 223, 200, 0.1)"
      : "0 0 400px 100px rgb(248, 208, 180, 0.3)"};
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  left: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`
export const SidebarContainer = styled.aside<any>`
  border-radius: 20px 0px 0px 20px;
  position: absolute;
  right: 0px;
  width: 60%;
  max-width: 320px;
  height: 100%;
  background: ${(props) =>
    props.isdark == "true" ? props.theme.background2 : props.theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CloseIcon = styled(BsXLg)<any>`
  color: ${(props) =>
    props.isdark == "true" ? props.theme.text : props.theme.background};
  padding: 8px;
  border-radius: 48px;
  width: 32px;
  height: 32px;
  opacity: 1;
  &:hover {
    background-color: ${(props) =>
      props.isdark == "true" ? props.theme.background : props.theme.text3};
  }
`
export const Icon = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  background: transparent;
  font-size: 14px;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${(props) =>
    props.isdark == "true" ? props.theme.text : props.theme.background};
`
export const SidebarMenu = styled.ul`
  width: 100%;
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 64px 64px 64px;
  @media screen and (max-width: 768px) {
    padding: 0px 0px 64px 48px;
  }
`

export const MenuItem = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 12px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`
