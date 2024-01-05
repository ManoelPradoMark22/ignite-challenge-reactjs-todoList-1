import { Trash, Check } from '@phosphor-icons/react';

import { TasksProps } from './Workspace';
import { CommonTasksProps } from './DashboardTasks';

import styles from './Task.module.css';

interface TaskProps extends CommonTasksProps{
  task: TasksProps
}

export function Task({ task, onToggleTask, onDeleteTask }: TaskProps) {
  const { completed, content, date } = task;

  function handleToggleTask() {
    onToggleTask(date);
  }

  return (
    <div className={styles.task}>
      <label>
        <input type="checkbox" checked={completed} onChange={handleToggleTask}/>
        <span className={styles.label}>{completed ? <Check/> : '' }</span>
      </label>
      <span className={completed ? styles.textTaskCompled : styles.textTask}>{content}</span>
      <Trash className={styles.deleteTask} size={14} onClick={() => onDeleteTask(date)}/>
    </div>
  )
}