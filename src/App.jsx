import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/97187822?v=4',
      name: 'Guilherme Spanserki',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date(Date.now())
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/17316392?v=4',
      name: 'Jackeline',
      role: 'CTO @ Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 '},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-09-05 20:00:00')
  }
]

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.publishedAt}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
                
            })
          }
        </main>
      </div>
    </div>
  )
}
