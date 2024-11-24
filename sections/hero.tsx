'use client';
import Image from "next/image"
import saLogo from "./logo.svg";

import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "../sass/main.scss";

import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Loader from "@/components/Loader";


// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="https://swami-associates.in/logo.jpg"
//           alt="Mettupalayam"
//           width={180}
//           height={38}
//           priority
//         />    
//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image              
//               src={saLogo}
//               alt="construction"
//               width={20}
//               height={20}
//             />
//             Swami
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Associates
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

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
        // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <motion.div layout
        // type='crossfade'
        >
            <AnimatePresence>
                {loading ? (
                    <motion.div key='loader'>
                        <Loader setLoading={setLoading} />
                    </motion.div>
                ) : (
                    <>
                        <Header />
                        <Banner />
                        {!loading && (
                            <div className='transition-image final'>
                                <motion.img
                                    transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                                    src={`/images/image-2.jpg`}
                                    layoutId='main-image-1'
                                />
                            </div>
                        )}
                    </>
                )}
            </AnimatePresence>
        </motion.div >
        //   </main>
        // </div>
    );
}