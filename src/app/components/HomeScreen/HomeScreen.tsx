"use client"
import styles from './HomeScreen.module.css'
import components from '../Components'
import resources from '@/app/resources/Resources'
import { useState } from 'react'
export default function HomeScreen() {
    let cards: Array<any> = [
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        },
        {
            name: "HTML/CSS",
            desc: "Vanilla HTML/CSS/JS playground",
            logo: resources.htmlLogo.src
        }
    ]
    let contentTitle = "Create playgrounds"
    let contentDesc = "Coding playgrounds on Codedamn are powered by VS Code IDE and start within a few seconds. Practice coding while learning for free."
    let [openSearchBox, setOpenSearchBox]=useState<boolean>()
    return (
        <div className={`${styles.HomeScreen}`}
        style={
            {
                opacity:openSearchBox?0.5:1
            }
        }
        >
            {components.utilities.Header(setOpenSearchBox)}
            {components.utilities.SearchBox(openSearchBox)}
            <div className={`${styles.HomeScreen__content}`}
            onClick={()=>{
                setOpenSearchBox(false)
            }}
            >
                <div className={`${styles.HomeScreen__contentTitle} inter`}>{contentTitle}</div>
                <div className={`${styles.HomeScreen__contentDesc} inter`}>{contentDesc}</div>
                <div className={`${styles.HomeScreen__LanguageCards}`}>
                    {cards.map((card: any, index: number) => {
                        return components.utilities.LanguageCard(card.name, card.desc, card.logo, index)
                    })}
                </div>
            </div>
            <components.utilities.Footer></components.utilities.Footer>
        </div>
    )
}