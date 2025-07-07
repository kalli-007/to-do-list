import { Link } from "react-router-dom";
function navbar() {
  return (
    <>
    <nav className="bg-violet-600 rounded-lg p-6 flex flex-col items-center justify-center flex-nowrap">

        <h1 className=" text-2xl font-bold mb-4 text-black font-extrabold box-decoration-slice">TO-DO-APP</h1>
        <h3 className=" text-2xl font-bold mb-4 text-black flex flex-nowrap">what to do - what not to do</h3>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
          </li>
        </ul>
    </nav>
    </>
    
    
    
);
}
export default navbar;