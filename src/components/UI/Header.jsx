const Header = () => {
  return (
    <nav className="position-fixed fixed-top navbar navbar-light bg-light z-index-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
            alt=""
            className="rounded"
            style={{ width: "2.4rem" }}
          />
          Prototype
        </a>
      </div>
    </nav>
  );
};

export default Header;
