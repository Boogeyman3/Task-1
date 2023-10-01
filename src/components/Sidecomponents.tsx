
import { Menu } from "antd";
import {
    AppstoreOutlined,
    HomeOutlined ,
    ContainerOutlined
  } from "@ant-design/icons";
  import {  useNavigate } from "react-router-dom";  
  import styled from "styled-components" 

  interface MenuItem {
    label: React.ReactNode;
    key: string;
    icon?: React.ReactNode;
  }
const Sidecomponents = () => {
    const navigate = useNavigate();
    
    const menuItems : MenuItem[] = [
        
     
        {
          label: "",
          icon: <AppstoreOutlined  style={{ fontSize: "23px" }} />,
          key: "/users",
        },
        {
          label: "",
          key: "/",
          icon: <HomeOutlined  style={{ fontSize: "23px" }} /> ,
        },
        {
          label: "",
          icon: <ContainerOutlined  style={{ fontSize: "23px" }} /> ,
          key: "container", // Unique key for Sign Out menu item
        },
       
      ];
     
    
  const handleMenuItemClick = (item: MenuItem) => {
    navigate(item.key);
  };

  const SideMenu = styled.div`

    height: 100%;
  background-color: white;
   z-index: 100;
  `
    
  return (
    <SideMenu>
    
    <Menu
      className="SideMenuVertical"
      mode="vertical"
      onClick={({ key }) => {
        const menuItem = menuItems.find((item) => item.key === key);
        if (menuItem) {
          handleMenuItemClick(menuItem);
        }
      }}
    
      items={menuItems}
    ></Menu>
    </SideMenu >
  )
}

export default Sidecomponents