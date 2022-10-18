import GlobalStyles, { darkTheme, lightTheme } from "../styles/ThemeConfig"
import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { useEffect, useState } from "react"
import useDarkMode from "use-dark-mode"
import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../gql/client"

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)
  const [isMounted, setIsMounted] = useState(false)
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const darkMode = useDarkMode(false)

  const theme = darkMode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = (param: boolean) => {
    setSidebarIsOpen(param)
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {isMounted && (
          <>
            <Navbar toggleMenu={toggleMenu} />
            <Sidebar isOpen={sidebarIsOpen} toggleMenu={toggleMenu} />
            <Component {...pageProps} isOpen={sidebarIsOpen} />
          </>
        )}
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
