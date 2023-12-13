import './Navbar.css';
function Navbar() {
    
    
    
    return (
        <nav className="navbar">
        <div className="language-buttons">
          {/* Czech Flag Button */}
          <button className="language-button">
            <img width={50} height={30} src="eng.png" alt="Czech Flag" />
          </button>
          {/* English Flag Button */}
          <button className="language-button">
            <img width={50} height={30} src="cz.png" alt="English Flag" />
          </button>
        </div>
        <div className="dark-mode-switch">
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <span className="dark-mode-label">Dark Mode</span>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  