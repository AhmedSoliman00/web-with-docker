import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <nav className="flex items-center justify-between  bg-teal-500 p-6 pl-20 ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight mr-20">
            Cloud-Project
          </span>
        </div>

        <div className="w-full block flex-grow  lg:w-auto w-50">
          <Link to="/">
            <a
              href=""
              className="inline-block mr-20 text-sm px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Home
            </a>
          </Link>
          <Link to="/students">
            <a
              href=""
              className="inline-block mr-20 text-sm px-6 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Students
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
