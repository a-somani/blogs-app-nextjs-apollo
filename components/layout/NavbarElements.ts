import styled from "styled-components"
import { motion } from "framer-motion"
import { BsXLg } from "react-icons/bs"

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0px;
  z-index: 997;
`
export const NavbarContainer = styled.div<any>`
  width: 100%;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  height: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  box-shadow: ${(props) =>
    props.showBorder === "true" &&
    (props.isdark == "true"
      ? `0 1px 2px 0 rgba(255, 255, 255, 0.1),0 1px 0 0 rgba(255, 255, 255, 0.1)`
      : `0 2px 64px 0 rgba(0, 0, 0, 0.05),0 1px 0 0 rgba(0, 0, 0, 0.08)`)};
  transition: box-shadow 300ms linear 0s, background-color;
  transition-property: box-shadow, background-color;
  transition-duration: 300ms;
  transition-timing-function: linear;
  transition-delay: 0s;
`
export const DropdownContainer = styled.aside<any>`
  width: 100%;
  background: ${(props) => props.theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 48px;
  min-height: 480px;
  @media screen and (max-width: 1024px) {
    min-height: none;
    height: 100%;
  }
`
export const DropdownOverlay = styled(motion.div)<any>`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.isdark == "true"
      ? "rgb(240, 230, 220, 0.05)"
      : "rgb(255, 218, 190, 0.4)"};
  box-shadow: ${(props) =>
    props.isdark
      ? "0 0 400px 100px rgb(240, 230, 220, 0.05)"
      : "0 0 400px 100px rgb(255, 218, 190, 0.4)"};
  left: 0;
  z-index: -1;
`

export const DDMenu = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 0px;
  background-color: ${(props) => props.theme.background};
  padding-top: 44px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: inherit;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.background2};
    border-radius: 4px;
  }
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  @media screen and (max-width: 1024px) {
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: center;
    padding-left: 32px;
    padding-bottom: 64px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: auto;
    justify-content: center;
    align-items: center;
    padding-bottom: 44px;
  }
`

export const DDList = styled.div`
  display: flex;
  justify-content: center;
  align-items: left;
  flex-direction: column;
  padding: 44px 44px;
  min-width: 100px;
  @media screen and (max-width: 1024px) {
    padding: 24px 44px;
    width: 100%;
  }
`
export const ListTitle = styled.div`
  color: ${(props) => props.theme.text3};
  font-size: 10px;
  font-weight: 500;
  transform: scale(1, 0.9);
  letter-spacing: 1px;
  text-align: left;
`
export const Item = styled.div`
  color: ${(props) => props.theme.text2};
  margin-top: 14px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`
export const ItemDesc = styled.div`
  color: ${(props) => props.theme.text3};
  font-size: 10px;
  font-weight: 500;
  margin-top: 2px;
`

export const DDCloseIcon = styled(BsXLg)<any>`
  color: ${(props) =>
    props.isdark == "true" ? props.theme.text2 : props.theme.background};
  padding: 6px;
  box-sizing: border-box;
  position: absolute;
  right: calc(50% - 12px);
  bottom: 32px;
  width: 24px;
  height: 24px;
  border-radius: 40px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isdark == "true" ? props.theme.background : props.theme.text};
  @media screen and (min-width: 1024px) {
    display: none;
  }
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-left: 18px;
  cursor: pointer;
  text-decoration: none;
  color: ${(props) => props.theme.text};
`

export const RightButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavMenu = styled.div<any>`
  cursor: pointer;
  height: 28px;
  font-size: 10px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1.2px;
  padding: 0px 12px;
  padding-top: 4px;
  margin-right: 18px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? props.theme.background3 : props.theme.background};
  color: ${(props) => props.theme.text};
  border: ${(props) => `1px solid ${props.theme.background3}`};
  border-radius: 20px;
  box-shadow: ${(props) =>
    props.isdark
      ? `2px 2px 64px 2px rgba(255, 255, 255, 0.),0px 0px 4px 0.5px rgba(255, 255, 255, 0.06)`
      : `2px 2px 64px 2px rgba(0, 0, 0, 0.1),0px 0px 4px 0.5px rgba(0, 0, 0, 0.03)`};

  &:hover {
    background-color: ${(props) => props.theme.background3};
  }
`

export const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  padding: 8px 8px;
  margin-right: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.text};
  border-radius: 24px;
  &:hover {
    background-color: ${(props) => props.theme.background2};
  }
`

export const NavChevron = styled(motion.div)`
  padding-bottom: 2px;
  font-size: inherit;
  margin-left: 6px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.text};
`
