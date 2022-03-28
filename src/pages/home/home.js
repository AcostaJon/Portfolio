import "../../sass/index.scss";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Main from "./main";
import "./_home.scss";

function Home() {
  return (
    <div className="home">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
