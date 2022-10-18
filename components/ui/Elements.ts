import styled from "styled-components"
import { FaTrashAlt, FaEdit } from "react-icons/fa"

export const Checkbox = styled.div`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
  margin-top: 4px;
  //line
  input[type="checkbox"] {
    width: 36px;
    height: 10px;
    background: ${(props) => props.theme.buttonOff};
    position: relative;
    border-radius: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    cursor: pointer;
    outline: none;

    &:checked + label {
      left: 30px;
    }

    &:focus-visible {
      outline: solid 2px white;
    }

    //toggle circle color
    & + label {
      display: inline-block;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      transition: left 0.3s ease;
      cursor: pointer;
      position: absolute;
      left: 8px;
      opacity: 1;
      background-color: ${(props) => props.theme.background};
    }
  }
`

export const ToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 20px;
`

export const ButtonWrapper = styled.div<any>`
  & > button {
    font-size: 24px;
    font-weight: bold;
    background: none;
    border: none;
    color: ${(props) =>
      props.active ? props.theme.buttonOn : props.theme.buttonOff};
    cursor: pointer;
    transition: color 0.3s ease;

    &:focus {
      outline: none;
    }
  }
`

export const Card = styled.ul<any>`
  width: 85%;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 0px;
  padding-bottom: 72px;
  margin: 32px 0px;
  border-bottom: ${(props) =>
    props.isdark == "true"
      ? `solid 1.5px ${props.theme.accent}`
      : `solid 1.5px ${props.theme.accent}`};

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
  }
`

export const CardImg = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @media screen and (max-width: 480px) {
    width: 100%;
    width: auto;
  }
`

export const CardImgWrapper = styled.picture`
  --size: 250px;
  height: var(--size);
  aspect-ratio: initial;
  object-fit: cover;
  width: calc(var(--size) * 1.5);
  max-width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 24px;
    align-self: center;
  }
  @media screen and (max-width: 480px) {
    --size: 200px;
  }
`

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 300px;
  flex-grow: unset;
  align-items: flex-start;
  @media screen and (min-width: 1024px) {
    margin-left: 40px;
    flex-grow: 1;
    height: 100%;
    width: 200px;
  }
`
export const CardTitle = styled.div`
  font-size: 24px;
  text-align: left;
  font-weight: 400;
  color: ${(props) => props.theme.text1};
  margin-bottom: 28px;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const CardDesc = styled.div`
  font-size: 12px;
  text-align: left;
  font-weight: 500;
  margin-bottom: 36px;
  color: ${(props) => props.theme.text2};
  letter-spacing: 0.5px;
`

export const CardLink = styled.a`
  color: ${(props) => props.theme.text};
  font-size: 10px;
  padding-bottom: 2px;
  text-align: left;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 600;
  letter-spacing: 1px;
  align-self: flex-start;
  border-bottom: ${(props) => `1.5px solid ${props.theme.text}`}; ;
`

export const DeleteIcon = styled(FaTrashAlt)`
  position: absolute;
  top: -48px;
  right: 0px;
  color: #c43b3ba0;
  border-radius: 8px;
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`
export const EditIcon = styled(FaEdit)`
  position: absolute;
  top: -50px;
  right: 40px;
  color: ${(props) => props.theme.text};
  border-radius: 8px;
  height: 23px;
  width: 23px;
  cursor: pointer;
  opacity: 0.3;
  &:hover {
    opacity: 0.7;
  }
`
