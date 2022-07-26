import type { NextPage } from "next";
import Header from "../components/Header";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Featured from "../components/Featured";

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Header />
      <Featured heading="Featured Products" limit={3} />
      <Body />
      <Footer />
    </div>
  );
};

export default Home;
