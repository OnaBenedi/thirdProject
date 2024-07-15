import Header from "../header/Header";
import HomeBody from "./home-body/HomeBody";

function Home() {
  return (
    <div className="App">
      <Header />
      Welcome to HopOn! Currently under development
      <main>
        <HomeBody />
      </main>
    </div>
  );
}

export default Home;
