import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="heading">
          Login Count Tool  
        </div>
        <div className="content">
          <div className="btn-container">
            <input type="date" className="from" />
            <input type="date" className="to" />
            {/* create select with 5 options */}
            <select>
              {/* create 5 options with compeny name */}
              <option value="1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, exercitationem porro? Ex.</option>
            </select>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
