import { ButtonWrapper, Checkbox, ToggleWrapper } from "./Elements"

interface toggleButtonProps {
  checked: boolean
  disable: () => void
  enable: () => void
  onToggle: () => void
  leftIcon: JSX.Element
  rightIcon: JSX.Element
}

const ToggleButton = ({
  disable,
  enable,
  onToggle,
  leftIcon,
  rightIcon,
  checked,
}: toggleButtonProps) => {
  return (
    <ToggleWrapper>
      <ButtonWrapper active={!checked}>
        <button type="button" onClick={disable}>
          {leftIcon}
        </button>
      </ButtonWrapper>
      <Checkbox>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <label />
      </Checkbox>
      <ButtonWrapper active={checked}>
        <button type="button" onClick={enable}>
          {rightIcon}
        </button>
      </ButtonWrapper>
    </ToggleWrapper>
  )
}

export default ToggleButton
