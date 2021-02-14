import '../index.css'

const Header = () => {
    return (
        <header>
            <h2>Github Username Search</h2>
            <a href="#">Home</a>
            <div className="search-container">
            <input type="text" placeholder="Username"></input>
            <button><i className="fas fa-search"></i></button>
            </div>
        </header>
    )
}

export default Header;