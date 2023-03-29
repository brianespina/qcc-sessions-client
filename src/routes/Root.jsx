import { Outlet, useMatches, Link } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const sidebarWidth = 200;

const SideBar = styled.aside`
  width: ${sidebarWidth}px;
  height: 100vh;
  background: #d9d9d9;
  position: relative;
  left: 0%;
  transform: translateX(-100%);
  transition: all 0.4s ease;
`;

const MainLayout = styled.main`
  display: flex;
  transition: all 0.4s ease;
  transform: translateX(-${sidebarWidth / 2}px);
  &.sidebarIsActive {
    transform: translateX(0);
  }
  &.sidebarIsActive ${SideBar} {
    transform: translateX(0);
  }
`;

const BodyLayout = styled.section`
  width: 100%;
`;

const Header = styled.header`
  height: 50px;
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  padding-inline: 40px;
  padding-block: 20px;
`;

const Title = styled.h1`
  font-weight: 600;
  color: #333;
`;

const ProfileImage = styled.div`
  width: 30px;
  height: 30px;
  background: #d9d9d9;
  border-radius: 100%;
`;

const Menu = styled.ul`
  list-style: none;
  padding-block: 20px;
  a {
    text-decoration: none;
    color: #333;
  }
`;

const CloseSidebar = styled.div`
  background: #d9d9d9;
  width: 13px;
  height: 30px;
  border-radius: 0 20px 20px 0;
  top: 50%;
  position: absolute;
  right: 0;
  transform: translateX(100%);
  cursor: pointer;
`;

export default function Root() {
  let matches = useMatches();
  let title = matches.filter((match) => Boolean(match.handle?.title))[0].handle
    .title;

  const [sidebarIsActive, setSidebarIsActive] = useState(true);

  return (
    <MainLayout className={sidebarIsActive && "sidebarIsActive"}>
      <SideBar>
        <Menu>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/sessions">Sessions</Link>
            <ul>
              <li>
                <Link to="/sessions/archived">Session Archived</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
        </Menu>
        <CloseSidebar onClick={() => setSidebarIsActive(false)} />
      </SideBar>
      <BodyLayout>
        <Header>
          <Title onClick={() => setSidebarIsActive(!sidebarIsActive)}>
            {title}
          </Title>
          <ProfileImage></ProfileImage>
        </Header>
        <Outlet />
      </BodyLayout>
    </MainLayout>
  );
}
