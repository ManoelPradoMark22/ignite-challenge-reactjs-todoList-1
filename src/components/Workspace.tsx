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
  const LS_KEY = "todo-rocket"
  const storageTasks = localStorage.getItem(LS_KEY) || JSON.stringify([]);

  const [tasks, setTasks] = useState<TasksProps[]>(JSON.parse(storageTasks));

  function createTask(newObjectTask:TasksProps) {
    setTasks((tasks) => {
      const newTasks = [
        ...tasks,
        newObjectTask
      ];
      localStorage.setItem(LS_KEY, JSON.stringify(newTasks));

      return newTasks
    });
  }

  function toggleTask(id:string) {
    const newTasks = [...tasks];

    newTasks.map(task => {
      if(task.id === id) {
        task.completed = !task.completed
      }
      return task
    })

    localStorage.setItem(LS_KEY, JSON.stringify(newTasks))
    setTasks(newTasks);
  }

  function deleteTask(id:string) {
    const newTasks = tasks.filter(task => task.id !== id);

    localStorage.setItem(LS_KEY, JSON.stringify(newTasks));
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