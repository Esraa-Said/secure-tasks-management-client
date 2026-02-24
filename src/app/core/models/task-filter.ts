import { TaskInterface } from "./task-interface";

export interface TaskFilters {
  status?: TaskInterface['status'];
  priority?: TaskInterface['priority'];
  title?: string;
  dueDate?: string;
}