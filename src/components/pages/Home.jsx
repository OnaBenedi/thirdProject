import './Home.css'
import Header from './Header'

function Home() {
  return (
    <div className="App">
      <Header></Header>
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

        <div class="comparator">
          <div class="option selected">
            <input type="radio" name="option1" id="option1" />
            <label className='radio-option' htmlFor="option1">Opción 1</label>

            <img className='image-option' src="src\assets\img\map-placeholder.webp" alt="Opción 1" />
            <button class="select-button">Select</button>
          </div>

          <div class="option">
            <input type="radio" name="option2" id="option1" />
            <label className='radio-option' htmlFor="option1">Opción 2</label>

            <img className='image-option' src="src\assets\img\map-placeholder.webp" alt="Opción 2" />
            <button class="select-button">Select</button>
          </div>

          <div class="option">
            <input type="radio" name="option3" id="option1" />
            <label className='radio-option' htmlFor="option1">Opción 3</label>

            <img className='image-option' src="src\assets\img\map-placeholder.webp" alt="Opción 3" />
            <button class="select-button">Select</button>
          </div>
        </div>

      </main>

    </div>
  );
}

export default Home;
