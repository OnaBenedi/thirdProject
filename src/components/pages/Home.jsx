import './Home.css'

function Home() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <div className="menu-icon">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </header>

      <main>
        <div className="search-bar">
          <div className='title'>
            <h2>Bienvenido a HopOn!</h2>
          </div>

          <div className='search'>
            <input type="text" placeholder="From" className="search-input" />
            <div className='line-space'></div>
            <input type="text" placeholder="To" className="search-input" />
            <button className="search-button">🔍</button>
          </div>
        </div>

        <div className="map-container">
          <img className='map-placeholder' src="src\assets\img\map-placeholder.webp" alt="Map Placeholder" />
        </div>
      </main>

    </div>
  );
}

export default Home;
