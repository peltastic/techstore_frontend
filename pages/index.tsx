import type { NextPage } from "next";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Nav />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
