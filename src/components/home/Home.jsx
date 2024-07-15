import Header from "../header/Header";
import HomeBody from "./home-body/HomeBody";

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomeBody />
      </main>
    </div>
  );
}

export default Home;
