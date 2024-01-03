import { PlusCircle } from '@phosphor-icons/react';

import styles from './Workspace.module.css';

export function Workspace() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.newTask}>
        <input type="text" placeholder='Adicione uma nova tarefa' />

        <button type='submit'>
          Criar <PlusCircle fontSize={16}/>
        </button>
      </form>
    </div>
  )
}