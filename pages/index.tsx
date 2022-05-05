import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Nav></Nav>
      <Header></Header>
    </div>
  );
};

export default Home;
