import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

export function Post({author, publishedAt, content}) {
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateFormatedPublic = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const [comments, setComment] = useState(['Muito bom hein ?'])
    const [newComentarios, setNewComentarios] = useState('')
    
    function adicionarComentario() {
        event.preventDefault()
        setComment([...comments, newComentarios])
        setNewComentarios('')
    }

    function deleteComment(comment) {
        const novaListaComentarios = comments.filter(response => {
            return response != comment
        })
        setComment(novaListaComentarios)
    }
    return (
        <article className={styles.post}>

            {/* Cabeçalho com os dados de quem publicou */}
            <header>
                <div className={styles.author}>
                    
                     <Avatar 
                      possuiBorda={true}
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
                {
                    content.map (line => {
                        if (line.type === 'paragraph') {
                            return <p key={line.content}>{line.content}</p>
                        }
                        if (line.type === 'link') {
                            return <p key={line.content}> <a>{line.content}</a></p>
                        }
                    })
                }
            </div>

            {/* Sessão comentarios */}
            <form onSubmit={adicionarComentario} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    required
                    value={newComentarios}
                    onChange={e => setNewComentarios(e.target.value)}
                    name='comment'
                    placeholder='Deixe seu comentario'></textarea>

                <button type='submit'>Publicar</button>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment 
                        onDeleteComment={deleteComment}
                        key={comment}
                        publishedAt={publishedDateFormatedPublic}
                        content={comment} />
                    })
                }
            </div>
        </article>
    )
}