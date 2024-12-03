import { motion } from "motion/react"
import {
    useMotionTemplate,
    useMotionValue,
    animate
} from "framer-motion";
import { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

const Navbar = () => {
    const color = useMotionValue(COLORS_TOP[0]);

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    return (
        <div

        >
            <motion.div
                initial={{ y: -60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 70 }}
                className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-transparent py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
                <div className="px-4">
                    <div className="flex items-center justify-between">
                        <div className="flex shrink-0">
                            <a aria-current="page" className="flex items-center" href="/">
                                <p className="text-white">Octopi Task 2</p>
                            </a>
                        </div>
                        <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
                            <button className="animated-text">
                                <span className="animated-text-one">About us</span>
                                <span className="animated-text-two">About us</span>
                            </button>
                            <button className="animated-text">
                                <span className="animated-text-one">Services</span>
                                <span className="animated-text-two">Services</span>
                            </button>
                            <button className="animated-text">
                                <span className="animated-text-one">Works</span>
                                <span className="animated-text-two">Works</span>
                            </button>

                        </div>
                        <div className="flex items-center justify-end gap-3">
                            {/* <AnimatedButton /> */}
                            <motion.button
                                style={{
                                    border,
                                    boxShadow,
                                }}
                                whileHover={{
                                    scale: 1.015,
                                }}
                                whileTap={{
                                    scale: 0.985,
                                }}
                                className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
                            >
                                Contact
                                <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Navbar