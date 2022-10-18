import ToggleButton from "../ui/Toggle"
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  Overlay,
  MenuItem,
} from "./SidebarElements"
import useDarkMode from "use-dark-mode"

interface SidebarProps {
  isOpen: boolean
  toggleMenu: (param: boolean) => void
}

const Sidebar = ({ isOpen, toggleMenu }: SidebarProps) => {
  const darkMode = useDarkMode(false)

  return (
    <Overlay
      isOpen={isOpen}
      isdark={darkMode.value.toString()}
      onClick={() => toggleMenu(false)}
    >
      <SidebarContainer
        isdark={darkMode.value.toString()}
        onClick={(e: Event) => e.stopPropagation()}
      >
        <Icon>
          <CloseIcon
            isdark={darkMode.value.toString()}
            onClick={() => toggleMenu(false)}
          />
        </Icon>
        <SidebarWrapper isdark={darkMode.value.toString()}>
          <SidebarMenu>
            <MenuItem>
              <h2>Home</h2>
            </MenuItem>
            <MenuItem>
              <h2>Latest Articles</h2>
            </MenuItem>
            <MenuItem>
              <h2>Top Articles</h2>
            </MenuItem>
            <MenuItem>
              <h2>Trending Authors</h2>
            </MenuItem>
            <MenuItem>
              <h2>Top Authors</h2>
            </MenuItem>
          </SidebarMenu>
          <ToggleButton
            checked={darkMode.value}
            onToggle={darkMode.toggle}
            enable={darkMode.enable}
            disable={darkMode.disable}
            leftIcon={<>☀</>}
            rightIcon={<>☾</>}
          />
        </SidebarWrapper>
      </SidebarContainer>
    </Overlay>
  )
}

export default Sidebar
