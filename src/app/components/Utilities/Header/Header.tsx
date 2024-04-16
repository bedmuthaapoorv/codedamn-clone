import resources from '@/app/resources/Resources'
import styles from './Header.module.css'
export default function Header(setOpenSearchBox:any) {
    return (
        <div className={`${styles.Header}`}>
            <div className={`${styles.Header__ParentFlex}`}>
                <div className={`${styles.Header__LeftFlex}`}>
                    <img className={`${styles.Header__sandwich}`} src={resources.sandwichIcon.src}></img>
                    <img className={`${styles.Header__codedamnLogo}`} src={resources.codedamnLogo.src}></img>
                    <div className={`${styles.Header__codedamnName} inter`}>codedamn</div>
                </div>
                <img className={`${styles.Header__search}`} 
                src={resources.searchIcon.src}
                onClick={()=>{
                    setOpenSearchBox(true)
                }}
                ></img>
                {/* <div className={`${styles.Header__trophy}`}></div>
            <div className={`${styles.Header__notification}`}></div>
            <div className={`${styles.Header__userPFP}`}></div> */}
            </div>
        </div>
    )
}