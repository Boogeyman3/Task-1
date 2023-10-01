import styled from "styled-components";
import { useState } from "react";

const NavContainer = styled.div`
  box-shadow: 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 36px;
  width: 100%;
  height: 80px;
  position: absolute;
  left: 50px;
`;

const NavItem = styled.div<{ isActive: boolean }>`
  cursor: pointer;
  padding: 27px;
  transition: background-color 0.3s;
  background-color: ${(props) => (props.isActive ? "#00635B" : "#ffffff")};
  color: ${(props) => (props.isActive ? "#ffffff" : "#000")};
  border-radius: 5px;

  &:hover {
    background-color: #00635b;
    color: #ffffff;
  }
`;

const Nav = () => {
  const [activeItem, setActiveItem] = useState<string>("Application Form");

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  return (
    <NavContainer>
      <NavItem
        isActive={activeItem === "Program Details"}
        onClick={() => handleItemClick("Program Details")}
      >
        Program Details
      </NavItem>
      <NavItem
        isActive={activeItem === "Application Form"}
        onClick={() => handleItemClick("Application Form")}
      >
        Application Form
      </NavItem>
      <NavItem
        isActive={activeItem === "Workflow"}
        onClick={() => handleItemClick("Workflow")}
      >
        Workflow
      </NavItem>
      <NavItem
        isActive={activeItem === "Preview"}
        onClick={() => handleItemClick("Preview")}
      >
        Preview
      </NavItem>
    </NavContainer>
  );
};

export default Nav;
