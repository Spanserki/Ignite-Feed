import styles from './Avatar.module.css'

export function Avatar({possuiBorda, src}) { //Desestruturação
    return (
        <img className={possuiBorda ? styles.avatar : styles.avatarSemBorda}
         src={src}/>
    )
}