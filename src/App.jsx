import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <h4>Passando valores por propriedades entre os componentes no React</h4>
        </main>
      </div>
    </div>
  )
}
