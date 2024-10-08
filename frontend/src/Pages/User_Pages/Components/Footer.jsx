import "../../../CSS/User_Css/Footer.css";
import React from "react";

const Footer = () => {
  return (
    <footer >
      <div className="footer-container">
        {/* <div className="footer-box-1"> */}
        <div className="footer-legend">
          <table>
            <h3 className="footer-h3">Socials</h3>
            <tr>
              <td className="t1"><a href="https://youtube.com/@walkez?si=Jp9rAz3xx5hc9f68">YOUTUBE</a></td>
              {/* <td className="t6">6. Cables</td> */}
              <td className="t4"><a href="https://www.linkedin.com/company/walkez/">LINKEDIN</a></td>
            </tr>
            <tr>
              <td className="t2"><a href="https://x.com/walkezwalk?t=Skd97YZFBYCTp5ZW_Uq-xw&s=08">TWITTER</a></td>
              <td className="t5"><a href="walkezwalk@gmail.com">E-MAIL</a></td>
              {/* <td className="t7">7. Water</td> */}
            </tr>
            <tr>
              <td className="t3"><a href="https://www.instagram.com/invites/contact/?igsh=1fbtk2hmxuzk5&utm_content=vxccn7e">INSTAGRAM</a></td>
              {/* <td className="t8">8. Broken Pavement</td> */}
            </tr>
            <tr>
              {/* <td className="t9">9. Crossing</td> */}
            </tr>
            <tr>
              {/* <td className="t10">10. Other</td> */}
            </tr>
          </table>
        </div>

        <div className="footer-contact">
          <h3>Contact us</h3>
          <p>
            <b>Email:</b> walkezwalk@gmail.com
          </p>
          <p>
            <b>Phone:</b> +91 86188 50572
          </p>
          <p>
            <b>Address:</b> Lorem ipsum dolor sit amet.
          </p>
        </div>
        {/* </div> */}

        {/* <div className="footer-socials">
          <h3>Socials</h3>
          <p>
            <a href="https://instagram.com">Instagram</a>
          </p>
          <p>
            <a href="https://facebook.com">Facebook</a>
          </p>
          <p>
            <a href="https://twitter.com">Twitter</a>
          </p>
        </div> */}
      </div>

      <div className="footer-copy">
        <p>&copy; 2024 Walkez. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
