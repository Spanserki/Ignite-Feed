import styles from './Comment.module.css'
import {Trash} from 'phosphor-react'
import {ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({content, publishedAt, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)

    function contador() {
        setLikeCount(likeCount + 1)
    }
    
    function handleDeleteCommentt() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar possuiBorda={false}
             src="https://avatars.githubusercontent.com/u/97187822?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Spanserki</strong>

                            <time className={styles.time}>{publishedAt}</time>
                        </div>

                        <button onClick={handleDeleteCommentt} title='Deletar comentario'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={contador}>
                        <ThumbsUp size={20}/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
    }