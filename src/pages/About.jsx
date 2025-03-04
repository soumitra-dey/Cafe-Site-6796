import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title text-center">Our Story</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              alt="Cafe interior"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg">
              Founded in 2010, Café Delight has been serving the community with passion and dedication. Our journey began with a simple dream: to create a warm and welcoming space where people could enjoy exceptional coffee and delicious treats.
            </p>
            <p className="text-lg">
              We source our coffee beans from sustainable farms around the world, ensuring both quality and ethical practices. Our skilled baristas are trained to perfect every cup, while our pastry chefs create fresh, handmade treats daily.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;