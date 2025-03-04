import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div>
      <section className="relative h-[80vh] bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
              Welcome to Café Delight
            </h1>
            <p className="text-xl text-white mb-8">Experience the perfect blend of tradition and taste</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;