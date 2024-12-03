import About from '../components/About';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import {
    useMotionTemplate,
    useMotionValue,
    motion,
} from "framer-motion";
import Services from '../components/Services';
import Footer from '../components/Footer';

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Home = () => {
    const color = useMotionValue(COLORS_TOP[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(125% 160% at 50% 0%, #020617 50%, ${color})`;
    return (
        <motion.section style={{
            backgroundImage,
        }} className="relative  min-h-screen place-content-center overflow-hidden bg-gray-950  text-gray-200 space-y-8">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Footer />
        </motion.section>
    );
};

export default Home;