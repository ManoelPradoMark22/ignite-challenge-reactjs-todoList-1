import { FormNewTask } from './FormNewTask';

import styles from './Workspace.module.css';
import { useState } from 'react';

export interface TasksProps { 
  content: string;
  date: Date;
  completed: boolean;
}

export function Workspace() {
  const [tasks, setTasks] = useState<TasksProps[]>([
    {
      content: 'Maravilha!!',
      date: new Date('2023-12-28 00:20'),
      completed: false
    }
  ]);

  console.log('1 - WORKSPACE');
  console.log(tasks);

  function createTask(newObjectTask:TasksProps) {
    setTasks((tasks) => [
      ...tasks,
      newObjectTask]);
  }

  return (
    <div className={styles.wrapper}>
      <FormNewTask
        onCreateTask={createTask}
      />
    </div>
  )
}