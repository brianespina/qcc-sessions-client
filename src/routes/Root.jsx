import { Outlet, useMatches } from "react-router-dom";
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
  let matches = useMatches();
  let title = matches.filter((match) => Boolean(match.handle?.title))[0].handle
    .title;
  console.log(title);
  return (
    <MainLayout>
      <SideBar>Sidebar</SideBar>
      <BodyLayout>
        <Header>{title}</Header>
        <Outlet />
      </BodyLayout>
    </MainLayout>
  );
}
