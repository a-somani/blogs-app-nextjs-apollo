import styled, { createGlobalStyle } from "styled-components"

export const lightTheme = {
  text: "#000",
  text2: "rgba(0, 0, 0, 0.88)",
  text3: "#8d8b94",
  background: "#fff",
  background2: "#ccc",
  background3: "#f0f0f0",
  buttonOn: "#ffe600",
  buttonOff: "#666",
  primary: "#b7c7c9",
  secondary: "#fbf8f5",
  accent: "#eee2d7",
}

export const darkTheme = {
  text: "#fff",
  text2: "#ddd",
  text3: "#8f8f8f",
  background: "#000",
  background2: "#202124",
  background3: "#363537",
  buttonOn: "lightblue",
  buttonOff: "#666",
  primary: "#0e1112",
  secondary: "#0e0c0b",
  accent: "#3a342e",
}

export interface ThemeType {
  text: string
  text2: string
  text3: string
  background: string
  background2: string
  background3: string
  buttonOn: string
  buttonOff: string
  primary: string
  secondary: string
  accent: string
}

const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
    html,
    body {
        padding: 0;
        margin: 0;
        box-sizing:border-box;
        font-family: 'Poppins', 'Roboto', sans-serif;
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text}; 
    }
    *{
      box-sizing: border-box;
    }
    
`
export default GlobalStyles

export const PageWrapper = styled.div<any>`
  position: absolute;
  margin-top: 56px;
  display: flex;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  flex-direction: column;
  opacity: ${({ sidebarIsOpen }) => (sidebarIsOpen ? 0.4 : 1)};
  transition: 0.4s ease-in-out;
`
