import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <FaCoffee className="text-cafe-300 text-2xl" />
            <span className="font-serif text-xl font-bold">Café Delight</span>
          </Link>
          
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;