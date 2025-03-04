import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <FaPhone className="text-2xl text-cafe-300" />
              <div>
                <h3 className="text-xl font-medium">Phone</h3>
                <p>(555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-2xl text-cafe-300" />
              <div>
                <h3 className="text-xl font-medium">Email</h3>
                <p>info@cafedelight.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-2xl text-cafe-300" />
              <div>
                <h3 className="text-xl font-medium">Address</h3>
                <p>123 Coffee Street</p>
                <p>Brewery District, City 12345</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-cafe-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-cafe-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-300"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-cafe-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-300"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-cafe-400 text-white py-2 px-4 rounded-lg hover:bg-cafe-500 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;