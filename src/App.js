import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

<nav>
        <div class="site">
            <a href="/home.html"> LOGo</a>   
        </div>

        <ul>
            <li> <a href="/Home.html"> Home</a> </li>
            <li> <a href="/about.html"> About</a></li>
            <li> <a href="/product.html"> product</a></li>
            <li> <a href="/Services.html">Services</a></li>
            <li> <a href="/contact.html">contact</a></li>

        </ul>

    </nav>

<main>
    <img src="https://www.sunset.com/wp-content/uploads/readers-choice-best-bridge-golden-gate-getty-462144413-0819.jpg" alt="img not found" width="1024" height="600"/>

    <h2>Welcome To BlogSpot</h2>

    <div class="txt">
     <h4>Services that we provide</h4>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id totam deleniti officia dolores enim? Adipisci velit inventore quaerat eius nesciunt, dolorem et illo sapiente vero repudiandae laudantium laborum quos molestiae!</p>
    </div>


<form >
    <input type="search" placeholder="Search" />
    <input type="date" name="" id="" />

    <div class="radio">
        <input type="radio" id="town"/> <label for="town">Town</label>
        <input type="radio" id="village"/> <label for="village">village</label>
        <input type="radio" id="City"/> <label for="City">City</label>
    
    </div>
   
</form>


<div class="city">
    <p>
        Manhattan
      <br /> LA <br />
      San Fransico 
      <br />
      Florida

    </p>
  

</div>


</main>

    <footer>
        <p>All rights reserver &copy; WarnerBros.Co</p>
    </footer>


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;