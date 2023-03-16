import styled from "styled-components";

const Button = styled.button`
  background: #d9d9d9;
  border: none;
  padding-inline: 16px;
  padding-block: 7px;
  border-radius: 3px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  :hover,
  :focus {
    background-color: #2ee59d;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-4px);
    border: none;
    outline: none;
  }
  :active {
    transform: translateY(0);
  }
`;

export default function BasicButton(props) {
  const { children, iconPre } = props;
  return (
    <Button {...props}>
      {children}
      {iconPre}
    </Button>
  );
}
