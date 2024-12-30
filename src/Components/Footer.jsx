import instaImage from "../assets/footerInsta.png";
import xImage from "../assets/footerX.png";
import linkedinImage from "../assets/footerLinkedin.png";
export default function Footer() {
  return (
    <>
      {/* Footer container */}
      <div className="container footerContainer">
        {/* Footer title */}
        <div>
          <h1 className="text-2xl font-semibold">Pro Lancer</h1>
        </div>
        {/* Footer navigation */}
        <nav>
          <ul className="flex flex-row">
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
          </ul>
        </nav>
        {/* Social media icons */}
        <div className="flex gap-10">
          <img src={instaImage} alt="Instagram" width={32} />
          <img src={xImage} alt="X" width={32} />
          <img src={linkedinImage} alt="LinkedIn" width={32} />
        </div>
        {/* Footer copyright */}
        <p>©️ {new Date().getFullYear()} ProLancer. All Rights Reserved.</p>
      </div>
    </>
  );
}
