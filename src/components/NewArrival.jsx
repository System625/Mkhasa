import React from 'react';
import newArivval from "../assets/images/newArrival.png";
import newArrivalMobile from "../assets/images/newArrivalMobile.png";
import { Link } from "react-router-dom";

const NewArrival = () => {
    return (
        <section className="new-arrival-banner px-0 md:px-6 border-b border-black border-t">
            <div className="mx-auto">
                <div className="flex items-center justify-between bg-white">
                    <div className="md:flex-1 hidden md:block">
                        <img src={newArivval} alt="New Arrival" className=" h-52 w-auto" />
                    </div>
                    <div className="flex-1 md:hidden">
                        <img src={newArrivalMobile} alt="New Arrival Mobile" className="h-52 w-full object-cover" />
                    </div>
                    <div className="flex-1 justify-center md:justify-start text-center md:text-left">
                        <h2 className=" text-2xl lg:text-7xl font-medium tracking-tighter">New Arrival</h2>
                        <div className="text-2xl lg:text-7xl text-[#FD451A] font-semibold tracking-tighter flex items-center flex-col md:flex-row gap-1 md:gap-5">
                            <div className='flex gap-1'>
                                30%{" "}
                                <span className='text-black font-normal'>Off{" "}</span>
                            </div>
                            <Link to="/categories/Perfumes%20" className="px-6 py-2 bg-black text-white text-base lg:text-2xl tracking-tighter font-medium">
                                Order Now
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NewArrival;
