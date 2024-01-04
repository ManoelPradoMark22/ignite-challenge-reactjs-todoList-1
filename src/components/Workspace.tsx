import { DashboardTasks } from './DashboardTasks';
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
    // {
    //   content: 'Essa é a sua primeira Task!',
    //   date: new Date('2023-12-28 00:20'),
    //   completed: false
    // }
  ]);

  function createTask(newObjectTask:TasksProps) {
    setTasks((tasks) => [
      ...tasks,
      newObjectTask]);
  }

  return (
    <div className={styles.wrapper}>
      <FormNewTask onCreateTask={createTask} />
      <DashboardTasks tasks={tasks}/>
    </div>
  )
}