import { PlusCircle } from '@phosphor-icons/react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './FormNewTask.module.css';
import { TasksProps } from './Workspace';

interface FormNewTaskProps {
  onCreateTask: (newObjectTask:TasksProps) => void
}

export function FormNewTask({ onCreateTask }: FormNewTaskProps) {
  const [newTaskText, setNewTaskText] = useState('');

  console.log(`2 - FORMNEWTASK | ${newTaskText}`)

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity("Esse campo é obrigatório!")
  }

  function handleCreateNewTask(event: FormEvent) {    
    event.preventDefault();

    const newObjectTask:TasksProps = {
      content: newTaskText,
      date: new Date(),
      completed: false
    }
    
    onCreateTask(newObjectTask);

    setNewTaskText('');
  }

  const isNewTaskEmpty = newTaskText.length === 0;

  return (
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
  )
}