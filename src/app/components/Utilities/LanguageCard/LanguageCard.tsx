import styles from './LanguageCard.module.css'
export default function LanguageCard(name:string, desc:string, logo:any, index:number){
    return (
        <div className={`${styles.LanguageCard}`} key={index}>
            <div className={`${styles.LanguageCard__Left}`}>
                <img src={logo} className={`${styles.LanguageCard__CardLogo}`}></img>
            </div>
            <div className={`${styles.LanguageCard__Right}`}>
                <div className={`${styles.LanguageCard__CardTitle} inter`}>
                    {name}
                </div>
                <div className={`${styles.LanguageCard__CardDesc} inter`}>
                    {desc}
                </div>
            </div>
        </div>
    )
}