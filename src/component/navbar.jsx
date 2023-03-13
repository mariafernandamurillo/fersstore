import "./navbar.css"

function Navbar() {
    return <div>
        <nav>
            <div className="dropdown">
                <button>Option 1.0</button>
                <div className="dropdown-content">
                    <a href="">Option 1.1</a>
                    <a href="">Option 1.2</a>
                    <a href="">Option 1.3</a>
                </div>
            </div>
            <div className="dropdown">
                <button>Option 2.0</button>
                <div className="dropdown-content">
                    <a href="">Option 2.1</a>
                    <a href="">Option 2.2</a>
                    <a href="">Option 2.3</a>
                </div>
            </div>
            <div className="dropdown">
                <button>Option 3.0</button>
                <div className="dropdown-content">
                    <a href="">Option 3.1</a>
                    <a href="">Option 3.2</a>
                    <a href="">Option 3.3</a>
                </div>
            </div>
        </nav>

        <div className="search">
            <input className="search-box" placeholder="Find a bag"></input>
            <button className="search-btn">Search</button>
        </div>
    </div>;
}

export default Navbar;