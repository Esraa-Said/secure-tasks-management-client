export interface TaskInterface {
  id?: string;
  title: string;
  description?: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  dueDate?: string;
  userId?: string;
}

export const TaskStatus = ['ALL STATUS','PENDING', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
export const TaskPriority = ['ALL PRIORITY','LOW', 'MEDIUM', 'HIGH'];
