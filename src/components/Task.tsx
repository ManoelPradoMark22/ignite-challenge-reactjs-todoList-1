import { Trash } from '@phosphor-icons/react';

import { TasksProps } from './Workspace';

import styles from './Task.module.css';


interface TaskProps {
  task: TasksProps
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox"/>
      <span className={task.completed ? styles.textTaskCompled : styles.textTask}>{task.content}</span>
      <Trash size={14}/>
    </div>
  )
}