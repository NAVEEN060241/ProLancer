import blogIcon from "../assets/blogIconImage.png";

export default function Navbar() {
  return (
    // Navbar
    <nav className="navbar navbarContainer">
      {/* BlogIcon */}
      <div className="ms-16 flex">
        <img src={blogIcon} alt="BlogIcon" width={45} />
      </div>
      {/* Nav Items */}
      <div>
        <ul className="flex gap-4 font-semibold">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      {/* Nav Button */}
      <div className="me-5">
        <button type="button" className="getStartedbtn">
          Sign In
        </button>
      </div>
    </nav>
  );
}
