import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>SkyForcast</h1>
          <p>Let's Predict the Future Together</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="Bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <br></br>
          <a href="/">Status</a>
          <br></br>
          <a href="/">License</a>
          <br></br>
          <a href="/">All Versions</a>
          <br></br>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <br></br>
          <a href="/">Issues</a>
          <br></br>
          <a href="/">Project</a>
          <br></br>
          <a href="/">Twitter</a>
          <br></br>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <br></br>
          <a href="/">Troubleshooting</a>
          <br></br>
          <a href="/">Contact Us</a>
          <br></br>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Services</a>
          <br></br>
          <a href="/">Privacy Policy</a>
          <br></br>
          <a href="/">License</a>
          <br></br>
        </div>
      </div>
    </div>
  );
};
export default Footer;
