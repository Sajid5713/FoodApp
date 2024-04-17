import Logo from "../img/Logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="site-footer bg-black text-white py-10">
        <div className="container mx-auto">
          <div className="grid  md:grid-cols-4 gap-5 px-16 text-slate-400">
            <div className="col-1">
              <img className="w-36 mb-2" src={Logo} alt="Seasoned Butcher" />
              <p>© 2024 Seasoned Butcher. All right reserved.</p>
            </div>
            <div className="col-2">
              <h2 className="text-slate-200">Company</h2>
              <ul className="flex flex-col gap-1 ">
                <li>
                  <a
                    href="/"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <h2 className="text-slate-200">Contact Us</h2>
              <ul className="flex flex-col gap-1 ">
                <li>
                  <a
                    href="/"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-105 transition ease-in-out duration-300 p-1 inline-block text-md"
                  >
                    Cart
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <h2 className="text-slate-200">We Deliver to</h2>
              <ul>
                <li>Islamabad</li>
                <li>Rawalpindi</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
