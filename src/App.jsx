import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>

      <Header/>

      <div className={styles.wrapper}>
        <aside>Grid</aside>
        <main>
          <h4>Passando valores por propriedades entre os componentes no React</h4>
        </main>
      </div>
    </div>
  )
}
