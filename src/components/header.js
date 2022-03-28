import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <div>
        <Link to="/" title="Home">
          <h2>Jonathan Acosta</h2>
        </Link>
        <a href="https://github.com/AcostaJon" title="my github profile" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
