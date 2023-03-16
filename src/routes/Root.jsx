import { Outlet } from "react-router-dom";
import styled from "styled-components";

const SideBar = styled.aside`
  width: 200px;
  height: 100vh;
  background: #d9d9d9;
`;

const MainLayout = styled.main`
  display: flex;
`;

const BodyLayout = styled.section`
  width: 100%;
`;

const Header = styled.header`
  height: 50px;
  width: 100%;
  margin-bottom: 20px;
`;
export default function Root() {
  return (
    <MainLayout>
      <SideBar>Sidebar</SideBar>
      <BodyLayout>
        <Header>Header</Header>
        <Outlet />
      </BodyLayout>
    </MainLayout>
  );
}
