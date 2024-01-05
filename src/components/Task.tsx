import { Trash, Check } from '@phosphor-icons/react';

import { TasksProps } from './Workspace';

import styles from './Task.module.css';


interface TaskProps {
  task: TasksProps
}

export function Task({ task }: TaskProps) {
  return (
    <div className={styles.task}>
      <label><input type="checkbox"/><span className={styles.label}>{task.completed ? <Check/> : '' }</span></label>
      <span className={task.completed ? styles.textTaskCompled : styles.textTask}>{task.content}</span>
      <Trash className={styles.deleteTask} size={14}/>
    </div>
  )
}