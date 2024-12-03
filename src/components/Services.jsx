import { useMotionTemplate, useMotionValue, motion } from "motion/react";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
const Services = () => {
    const color = useMotionValue(COLORS_TOP[0]);
    const border = useMotionTemplate`1px solid ${color}`;
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
    return (

        <div className="">
            <div className="mx-auto h-full  py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
                <div className="flex flex-col-reverse justify-between items-center xl:flex-row md:gap-10  gap-5">
                    <div className="relative  lg:block lg:w-1/2">
                        <div
                            className="relative my-3 flex h-full flex-col w-full lg:w-[600px] overflow-hidden rounded-2xl bg-transparent text-gray-600 shadow-lg ring-1 ring-gray-200">

                            <h2 className="m-5  p-3 rounded-xl text-center  text-xl lg:text-2xl font-bold text-white">What We Offer</h2>
                            <div className="flex-auto p-6">
                                <div className="relative flex flex-col justify-center">

                                    <div className="relative mb-4 flex gap-5 items-center">
                                        {/* <span className=" inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 p-4 text-center text-base font-semibold text-white shadow">1</span>
                                                 */}
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
                                            1

                                        </motion.button>
                                        <div className="mr-12 w-auto pt-1">
                                            <h6 className="text-xl font-semibold text-white ">Creative Design</h6>
                                            <p className="mt-1 text-sm text-gray-100">Branding, Graphic Design, UI/UX
                                            </p>
                                        </div>
                                    </div>


                                    <div className="relative mb-4 flex gap-5 items-center">
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
                                            2

                                        </motion.button>
                                        <div className="mr-12 w-auto pt-1">
                                            <h6 className="text-xl font-semibold text-white">Consulting Services:</h6>
                                            <p className="mt-1 text-sm text-gray-100">Strategy, Business Analysis, Growth Hacking</p>
                                        </div>
                                    </div>
                                    <div className="relative mb-4 flex gap-5 items-center">
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
                                            3

                                        </motion.button>
                                        <div className="mr-12 w-auto pt-1">
                                            <h6 className="text-xl font-semibold text-white">Web Development</h6>
                                            <p className="mt-1 text-sm text-gray-100">
                                                Custom Websites, E-Commerce, Web Apps
                                            </p>
                                        </div>
                                    </div>

                                    <div className="relative mb-4 flex gap-5 items-center">
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
                                            4

                                        </motion.button>
                                        <div className="mr-12 w-auto pt-1">
                                            <h6 className="text-xl font-semibold text-white">Digital Marketing</h6>
                                            <p className="mt-1 text-sm text-gray-100">SEO, Social Media Marketing, PPC Campaigns</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative  lg:block lg:w-1/2">
                        <img src="https://res.cloudinary.com/dt9k74vof/image/upload/v1712581499/New_Project_4_jlzbhj.webp" className="px-4 lg:px-0" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services