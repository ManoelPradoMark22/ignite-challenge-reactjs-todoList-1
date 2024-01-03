import { PlusCircle } from '@phosphor-icons/react';

import styles from './Workspace.module.css';
import { ChangeEvent, InvalidEvent, useState } from 'react';

export function Workspace() {
  const [newTaskText, setNewTaskText] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  const isNewTaskEmpty = newTaskText.length === 0;

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

        <button type='submit' disabled={isNewTaskEmpty}>
          Criar <PlusCircle fontSize={16}/>
        </button>
      </form>
    </div>
  )
}