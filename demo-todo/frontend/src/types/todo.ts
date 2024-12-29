export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  dueDate?: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoInput {
  title: string;
  description?: string;
  dueDate?: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface UpdateTodoInput extends Partial<CreateTodoInput> {
  id: string;
  completed?: boolean;
}
