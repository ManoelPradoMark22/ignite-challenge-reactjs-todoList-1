import { DashboardTasks } from './DashboardTasks';
import { FormNewTask } from './FormNewTask';

import styles from './Workspace.module.css';
import { useState } from 'react';

export interface TasksProps { 
  id: string,
  content: string;
  date: Date;
  completed: boolean;
}

export function Workspace() {
  const [tasks, setTasks] = useState<TasksProps[]>([]);

  function createTask(newObjectTask:TasksProps) {
    setTasks((tasks) => [
      ...tasks,
      newObjectTask]);
  }

  function toggleTask(id:string) {
    const newTasks = [...tasks];

    newTasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })

    setTasks(newTasks);
  }

  function deleteTask(id:string) {
    const newTasks = tasks.filter(task => task.id !== id);

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