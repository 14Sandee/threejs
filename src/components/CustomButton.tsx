import React from 'react'
import state from '../store/index.ts'
import { useSnapshot } from 'valtio'

export const CustomButton = ({ customStyle, onClick, title, type }: { type: string, title: string, onClick: VoidFunction, customStyle: string }) => {

    const snap = useSnapshot(state)
    const generateStyle = (type: string) => {
        switch (type) {
            case 'filled':
                return {
                    backgroundColor: '#1a1a1a',
                    color: '#fff'
                }
            case 'outlined':
                return {
                    backgroundColor: 'transparent',
                    color: '#000',
                    border: '1px solid #000'
                }
            default:
                return {}
        }
    }

    return (
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyle}`}
            style={generateStyle(type)}
            onClick={onClick}
        >
            {title}
        </button>
    )
}
