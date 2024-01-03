import { PlusCircle } from '@phosphor-icons/react';

import styles from './Workspace.module.css';
import { ChangeEvent, InvalidEvent, useState } from 'react';

export function Workspace() {
  const [newTaskText, setNewTaskText] = useState('');

  console.log(newTaskText)

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  return (
    <div className={styles.wrapper}>
      <form className={styles.newTask}>
        <input 
          type="text" 
          onChange={handleNewTaskChange}
          value={newTaskText}
          onInvalid={handleNewTaskInvalid}
          placeholder='Adicione uma nova tarefa'
          required
        />

        <button type='submit'>
          Criar <PlusCircle fontSize={16}/>
        </button>
      </form>
    </div>
  )
}