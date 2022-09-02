import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>

            {/* Cabeçalho com os dados de quem publicou */}
            <header>
                <div className={styles.author}>
                    <img
                        className={styles.avatar}
                        src="https://avatars.githubusercontent.com/u/97187822?v=4"
                     />

                     <div className={styles.authorInfo}>
                        <strong>Guilherme Spanserki</strong>
                        <span>Web Developer</span>
                     </div>
                </div>

                <time className={styles.time} title='02 de Setembro as 10h58' dateTime='2022-05-08 08:13:26'>Publicado a 1h</time>
            </header>

            {/* Listagem da publicação */}
            <div className={styles.content}>
                
                <p>Fala galeraa 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifolio É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

                <p>👉 <a href="">jane.design/doctorcare</a> </p>

                <p> <a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>

            {/* Sessão comentarios */}
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe seu comentario'></textarea>

                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    )
}