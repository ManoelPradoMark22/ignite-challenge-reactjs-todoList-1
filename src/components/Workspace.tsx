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
    {
      content: 'Essa é a sua primeira Task! ola ola teste',
      date: new Date('2023-12-28 00:20'),
      completed: false
    },
    {
      content: 'Essa é a sua segunda Task!',
      date: new Date('2023-12-28 13:05'),
      completed: true
    }
  ]);

  function createTask(newObjectTask:TasksProps) {
    setTasks((tasks) => [
      ...tasks,
      newObjectTask]);
  }

  function toggleTask(id:Date) {
    const newTasks = [...tasks];

    newTasks.map(task => {
      if(task.date === id) {
        task.completed = !task.completed
      }
      return task
    })

    setTasks(newTasks);
  }

  function deleteTask(id:Date) {
    const newTasks = tasks.filter(task => task.date !== id);

    setTasks(newTasks);
  }

  return (
    <div className={styles.wrapper}>
      <FormNewTask onCreateTask={createTask} />
      <DashboardTasks 
        tasks={tasks}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  )
}