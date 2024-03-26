import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { ColorTypes } from '../config/constants'
import { CustomButton } from '../components'
import { getShoeMaterialName } from '../config/helpers'

export const Customizer = () => {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {!snap.intro && <>
                <motion.header className='head' {...slideAnimation('down')}>
                    <img className='absolute top-5 left-20 w-20 h-auto object-contain' src='./nikelogo.png' alt='logo' />
                </motion.header>
                <motion.div className='absolute z-5 top-5 right-5' {...fadeAnimation}>
                    <CustomButton
                        type='filled'
                        title='Go back'
                        customStyle='w-fit px-4 py-2.5 font-bold text-sm'
                        onClick={() => state.intro = true}
                    />
                </motion.div>
                <motion.div className='filtertabs-container' {...slideAnimation('up')}>
                    <div className='flex flex-col items-center gap-8'>
                        <p className='text-lg'>{getShoeMaterialName(snap.current)}</p>
                        <div className='max-w-xl flex items-center gap-4'>
                            {
                                ColorTypes.map((c, index) => (
                                    <ColorOptions key={index} color={c.color} name={c.name} />
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </>}
        </AnimatePresence>
    )
}


const ColorOptions = ({ color, name }: { color: string, name: string }) => {
    const snap = useSnapshot(state)
    const handleColorChange = (color: string) => {
        state.currentColor = color
        state.items[snap.current as keyof typeof snap.items] = color
    }
    return (
        <div className='flex flex-col gap-4 items-center'>
            <div
                onClick={() => handleColorChange(color)}
                className={`w-10 h-10  ${snap.currentColor === color ? 'border border-gray-300' : 'transparent'}  rounded-full mx-3 p-1 cursor-pointer`}
            >
                <div className={`w-full h-full rounded-full `} style={{ backgroundColor: color }} >
                </div>
            </div>
            <p className='text-xs'>{name}</p>
        </div>
    )
}