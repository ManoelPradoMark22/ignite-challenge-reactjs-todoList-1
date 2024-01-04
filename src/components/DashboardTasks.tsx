import styles from './DashboardTasks.module.css';

import { TasksProps } from './Workspace';

import emptyIcon from '../assets/emptyIcon.svg'

interface DashboardTasksProps {
  tasks: TasksProps[]
}

export function DashboardTasks({ tasks }: DashboardTasksProps) {

  const isArrayTasksEmpty = tasks.length === 0;

  return (
    <div className={styles.dashboardTasks}>
      <header className={styles.divCouting}>

      </header>

      <div 
        className={
          isArrayTasksEmpty ? styles.containerTasksListEmpty : styles.containerTasksList
        }
      >
        {
          isArrayTasksEmpty ? 
          <div className={styles.divEmptyBox}>
            <img src={emptyIcon} alt="logo" />
            <p><span>Você ainda não tem tarefas cadastradas</span>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          <div className={styles.divTasksList}>

          </div>
        }
      </div>
    </div>
  )
}