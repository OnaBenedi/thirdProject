import Header from "../header/Header";
import HomeBody from "./home-body/HomeBody";
import Footer from "../footer/Footer"

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeBody />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
