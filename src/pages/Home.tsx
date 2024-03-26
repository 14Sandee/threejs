import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import store from '../store'
import { CustomButton } from '../components';

export const Home = () => {
    const snap = useSnapshot(store);
    return (
        <AnimatePresence>
            {snap.intro && <motion.section className='home' {...slideAnimation('left')}>
                <motion.header className='head' {...slideAnimation('down')}>
                    <img className='w-20 h-auto object-contain' src='./nikelogo.png' alt='logo' />
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h1 className='head-text'>
                            Just <br className='xl:block hidden' /> Do it.
                        </h1>
                    </motion.div>
                    <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                        <p className='max-w-md font-normal text-gray-600 text-base'>Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "}and define your own style.</p>
                        <CustomButton
                            type='filled'
                            title='Start Designing'
                            onClick={() => store.intro = false}
                            customStyle='w-fit px-4 py-2.5 font-bold text-sm'
                        />
                    </motion.div>
                </motion.div>
            </motion.section>}
        </AnimatePresence>
    )
}
