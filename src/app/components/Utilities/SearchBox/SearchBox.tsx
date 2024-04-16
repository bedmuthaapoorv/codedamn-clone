import resources from '@/app/resources/Resources'
import styles from './SearchBox.module.css'
export default function SearchBox(openSearchBox:boolean=false){
    return (
        <div className={`${styles.SearchBox}`}
            style={{
                display:openSearchBox?"":"none"
            }}
        >
            <img src={resources.searchIcon.src} className={`${styles.SearchBox__searchIcon}`}></img>
            <input className={`${styles.SearchBox__input}`}></input>
        </div>
    )
}