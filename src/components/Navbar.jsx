import "../index.css";

function Navbar() {
  return (
    <>
      <div className="cw_navbar__mainnav">
        <a
          className="cw_navbar__logo"
          href="/"
          id="header-ppLogo"
          name="header-logo"
        >
          <span className="icon-svg icon-size">
            <img
              src="https://www.paypalobjects.com/paypal-ui/logos/svg/paypal-mark-monotone-transparent.svg"
              alt="Dashboard"
            />
          </span>
        </a>
        <div className="cw_navbar__nav" role="navigation">
          <ul className="cw_navbar__primary">
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Home
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Finances
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Send and Request
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Deals
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Wallet
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                Activity
              </a>
            </li>
          </ul>
          <ul className="cw_navbar__secondary">
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 448 512"
                  >
                    <path
                      d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
                      style={{ fill: "aliceblue" }}
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.5em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                      style={{ fill: "aliceblue" }}
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a className="cw_navbar__primary-item cw_navbar__primary-item--selected">
                LOG OUT
              </a>
            </li>
          </ul>
        </div>
      </div>
      <nav className="mobile-nav">
        <button id="menu-button">Menu</button>
      </nav>
    </>
  );
}

export default Navbar;
