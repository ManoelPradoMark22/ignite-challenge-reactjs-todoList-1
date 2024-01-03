import { PlusCircle } from '@phosphor-icons/react';

import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <form className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />

          <button type='submit'>
            Criar <PlusCircle fontSize={16}/>
          </button>
        </form>
      </div>
    </div>
  )
}