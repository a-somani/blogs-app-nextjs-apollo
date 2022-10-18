import {
  MenuIcon,
  NavbarContainer,
  NavChevron,
  NavMenu,
  RightButtons,
  Title,
  NavbarWrapper,
  DropdownContainer,
  DropdownOverlay,
  DDMenu,
  DDList,
  DDCloseIcon,
  ListTitle,
  Item,
  ItemDesc,
} from "./NavbarElements"
import { FaChevronDown } from "react-icons/fa"
import { HiOutlineMenu } from "react-icons/hi"
import { useEffect, useState } from "react"
import useDarkMode from "use-dark-mode"
import { AnimatePresence } from "framer-motion"
import Link from "next/link"

const bounceTransition = {
  y: {
    duration: 0.6,
    repeat: Infinity,
    ease: "easeInOut",
    repeatDelay: 0.4,
  },
}

interface NavbarProps {
  toggleMenu: (props: any) => any
}

const Navbar = ({ toggleMenu }: NavbarProps) => {
  const { value } = useDarkMode()
  const [scrollNav, setScrollNav] = useState(false)
  const [isHoveringMenu, setIsHoveringMenu] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 2) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    if (showMenu) {
      setScrollNav(true)
    } else if (window.scrollY < 2) {
      setScrollNav(false)
    }
  }, [showMenu])

  useEffect(() => {
    window.addEventListener("scroll", changeNav)

    return () => {
      window.removeEventListener("scroll", changeNav)
    }
  }, [])

  return (
    <NavbarWrapper>
      <NavbarContainer
        showBorder={scrollNav.toString()}
        isdark={value.toString()}
        // onMouseLeave={() => setShowMenu(false)}
      >
        <Link href="/">
          <Title>PMD Blogs</Title>
        </Link>
        <RightButtons>
          <NavMenu
            onMouseEnter={() => setIsHoveringMenu(true)}
            onMouseLeave={() => setIsHoveringMenu(false)}
            onClick={() => setShowMenu((prev) => !prev)}
            isActive={showMenu}
          >
            ARTICLES
            <NavChevron
              key={isHoveringMenu.toString()}
              transition={isHoveringMenu ? bounceTransition : {}}
              initial={isHoveringMenu}
              animate={{ y: ["0%", "15%", "0%"] }}
            >
              <FaChevronDown
                style={showMenu ? { transform: "rotate(180deg)" } : {}}
              />
            </NavChevron>
          </NavMenu>
          <MenuIcon onClick={toggleMenu}>
            <HiOutlineMenu />
          </MenuIcon>
        </RightButtons>
      </NavbarContainer>
      <AnimatePresence initial={false}>
        {showMenu && (
          <DropdownOverlay
            isdark={value.toString()}
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
            <DropdownContainer onMouseLeave={() => setShowMenu(false)}>
              <DDMenu>
                <DDList>
                  <ListTitle>TOP ARTICLES</ListTitle>
                  <Item>
                    Sports
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                  <Item>
                    Pop Culture
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                  <Item>
                    Business
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                </DDList>
                <DDList>
                  <ListTitle>TRENDING ARTICLES</ListTitle>
                  <Item>
                    Sports
                    <ItemDesc>The best this week</ItemDesc>
                  </Item>
                  <Item>
                    Pop Culture
                    <ItemDesc>The best this week</ItemDesc>
                  </Item>
                  <Item>
                    Business
                    <ItemDesc>The best this week</ItemDesc>
                  </Item>
                </DDList>
                <DDList>
                  <ListTitle>TOP AUTHORS</ListTitle>
                  <Item>
                    Sports
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                  <Item>
                    Pop Culture
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                  <Item>
                    Business
                    <ItemDesc>The best in the world</ItemDesc>
                  </Item>
                </DDList>
                <DDList>
                  <ListTitle>TRENDING AUTHORS</ListTitle>
                  <Item>
                    Sports
                    <ItemDesc>The best authors this week</ItemDesc>
                  </Item>
                  <Item>
                    Pop Culture
                    <ItemDesc>The best authors this week</ItemDesc>
                  </Item>
                  <Item>
                    Business
                    <ItemDesc>The best authors this week</ItemDesc>
                  </Item>
                </DDList>
                <DDCloseIcon onClick={() => setShowMenu(false)} />
              </DDMenu>
            </DropdownContainer>
          </DropdownOverlay>
        )}
      </AnimatePresence>
    </NavbarWrapper>
  )
}

export default Navbar
