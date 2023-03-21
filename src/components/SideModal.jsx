import styled from "styled-components";
import { useState } from "react";

export default function SideModal(props) {
  const { children, size } = props;

  const [isOpen, setIsOpen] = useState(true);

  const Modal = styled.div`
    width: ${size ? size : "500px"};
    position: fixed;
    right: 0;
    height: 100vh;
    top: 0;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 60px;
  `;

  return <Modal>{children}</Modal>;
}
