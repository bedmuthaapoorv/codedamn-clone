"use client"
import resources from '@/app/resources/Resources'
import styles from './Footer.module.css'
import { useState } from 'react'
export default function Footer() {
    let icons = [
        resources.homeIcon.src,
        resources.videosIcon.src,
        resources.boardsIcon.src,
        resources.terminalIcon.src
    ]
    let [selectedOption, setSelectedOption]=useState<number>(-1);
    return (
        <div className={`${styles.Footer}`}>
            {
                icons.map((icon, index) => {
                    return <div 
                    className={`${styles.Footer__iconflex}`} 
                    key={index}
                    style={{
                        borderTopWidth: selectedOption==index?"2px":0
                    }}
                    onClick={()=>{
                        setSelectedOption(index);
                    }}
                    >
                        <img 
                        className={`${styles.Footer__icon}`} 
                        src={icon}
                        style={{
                            opacity: selectedOption==index?1:0.4
                        }}
                        ></img>
                    </div>
                })
            }
        </div>
    )
}