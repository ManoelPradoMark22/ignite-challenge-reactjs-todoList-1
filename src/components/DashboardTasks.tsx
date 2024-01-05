import styles from './DashboardTasks.module.css';

import { TasksProps } from './Workspace';

import emptyIcon from '../assets/emptyIcon.svg'
import { Task } from './Task';

export interface CommonTasksProps {
  onToggleTask: (id:Date) => void,
  onDeleteTask: (id:Date) => void
}
interface DashboardTasksProps extends CommonTasksProps{
  tasks: TasksProps[]
}

export function DashboardTasks(
  { tasks, onToggleTask, onDeleteTask }: DashboardTasksProps) {

  const isArrayTasksEmpty = tasks.length === 0;

  const countCompletedTasks = tasks.reduce((acumulator, value) => 
    value.completed ? acumulator+=1 : acumulator
  , 0);

  return (
    <div className={styles.dashboardTasks}>
      <header className={styles.headerCouting}>
        <div>
          <span className={styles.createdTasks}>Tarefas criadas</span>
          <span className={styles.coutingTasks}>{tasks.length}</span>
        </div>

        <div>
          <span className={styles.completedTasks}>Concluídas</span>
          <span className={styles.coutingTasks}>{countCompletedTasks}</span>
        </div>
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
            {tasks.map(task => {
              return (
                <Task 
                  key={task.date.toISOString()}
                  task={task}
                  onToggleTask={onToggleTask}
                  onDeleteTask={onDeleteTask}
                />
              )
            })}
          </div>
        }
      </div>
    </div>
  )
}