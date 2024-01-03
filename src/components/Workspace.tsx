import { PlusCircle } from '@phosphor-icons/react';

import styles from './Workspace.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface TasksProps { 
  content: string;
  date: Date;
  completed: boolean;
}

export function Workspace() {
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      content: 'Maravilha!!',
      date: new Date('2023-12-28 00:20'),
      completed: false
    }
  ]);

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function handleCreateNewTask(event: FormEvent) {    
    event.preventDefault();

    const newObjectTask = {
      content: newTaskText,
      date: new Date(),
      completed: false
    }
    
    setTasks([
      ...tasks,
      newObjectTask]);
    setNewTaskText('');
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleCreateNewTask} className={styles.newTask}>
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