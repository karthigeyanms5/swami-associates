'use client';
import Image from "next/image"
import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import Loader from "@/components/Loader";


export default function Hero() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            document.querySelector("body")?.classList.add("loading");
        } else {
            document.querySelector("body")?.classList.remove("loading");
        }
    }, [loading]);



    return (
        <section>
            <motion.div layout>
                <AnimatePresence>
                    {loading ? (
                        <motion.div key='loader'>
                            {/* <Loader setLoading={setLoading} /> */}
                        </motion.div>
                    ) : (
                        <>
                            {/* <Header />
                            <Banner /> */}
                            {!loading && (
                                <div className='transition-image final'>
                                    {/* <motion.img
                                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                                        src={`/images/image-2.jpg`}
                                        layoutId='main-image-1'
                                    /> */}
                                </div>
                            )}
                        </>
                    )}
                </AnimatePresence>
            </motion.div >
        </section>
    );
}