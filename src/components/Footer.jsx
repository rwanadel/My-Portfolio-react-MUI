import { Typography, Link, IconButton } from "@mui/material";
import { LocationOn, Telegram } from "@mui/icons-material";
import { Twitter, Facebook, Instagram } from "@mui/icons-material";
import "../styles/Footer.css"; // Add your custom CSS here

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Column - Lets talk about */}

        {/* Second Column - Links */}
        <div className="footer-column">
          <Typography variant="h6" className="footer-heading">
            Links
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="#" color="inherit">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                About
              </Link>
            </li>

            <li>
              <Link href="#" color="inherit">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Third Column - Services */}
        <div className="footer-column">
          <Typography variant="h6" className="footer-heading">
            Services
          </Typography>
          <ul className="footer-links">
            <li>
              <Link href="#" color="inherit">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Business Strategy
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Data Analysis
              </Link>
            </li>
            <li>
              <Link href="#" color="inherit">
                Graphic Design
              </Link>
            </li>
          </ul>
        </div>

        {/* Fourth Column - Contact */}
        <div className="footer-column">
          <Typography variant="h6" className="footer-heading">
            Have a Questions?
          </Typography>
          <ul className="footer-contact">
            <li>
              <LocationOn /> Egypt
            </li>

            <li>
              <Telegram /> info@yourdomain.com
            </li>
          </ul>
          <div className="footer-icons">
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <Typography variant="body2">
          Copyright ©2024 All rights reserved | This template is made with by
          rwan adel
        </Typography>
      </div>
    </footer>
  );
}
