import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-cafe-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Café Delight</h3>
            <p className="text-cafe-100">Making every moment delightful with our carefully crafted coffee and delicious treats.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Hours</h4>
            <p>Monday - Friday: 7am - 8pm</p>
            <p>Saturday - Sunday: 8am - 9pm</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaFacebook className="text-2xl hover:text-cafe-100 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-cafe-100 cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-cafe-100 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;