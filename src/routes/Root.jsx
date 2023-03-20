import { Outlet, useMatches, Link } from "react-router-dom";
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
  width: 20px;
  height: 20px;
  background: red;
`;

const Menu = styled.ul`
  list-style: none;
  padding-block: 20px;
  a {
    text-decoration: none;
    color: #333;
  }
`;

export default function Root() {
  let matches = useMatches();
  let title = matches.filter((match) => Boolean(match.handle?.title))[0].handle
    .title;
  console.log(title);
  return (
    <MainLayout>
      <SideBar>
        <Menu>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/sessions">Sessions</Link>
          </li>
          <li>
            <Link to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link to="/members">Members</Link>
          </li>
        </Menu>
      </SideBar>
      <BodyLayout>
        <Header>
          <Title>{title}</Title>
          <ProfileImage></ProfileImage>
        </Header>
        <Outlet />
      </BodyLayout>
    </MainLayout>
  );
}
