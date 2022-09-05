import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Post({author, publishedAt}) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateFormatedPublic = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    return (
        <article className={styles.post}>

            {/* Cabeçalho com os dados de quem publicou */}
            <header>
                <div className={styles.author}>
                    
                     <Avatar possuiBorda={true}
                      src={author.avatarUrl} />
                    
                     <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                     </div>
                </div>

                <time className={styles.time}
                    title={publishedDateFormated}
                    dateTime={publishedAt.toISOString()}>{publishedDateFormatedPublic}
                </time>
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