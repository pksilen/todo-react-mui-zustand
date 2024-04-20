import { Todo } from '../model/Todo';

export interface TodoService {
  getTodos(): Promise<Todo[]>;
}
