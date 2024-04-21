import { Todo } from '../stores/Todo';
import { TodoService } from './TodoService';
import ApiError from '../../utils/ApiError';

export const BASE_URL = 'http://localhost:8080/todos';

class TodoServiceImpl implements TodoService {
  async createTodo(todo: Todo): Promise<Error | null> {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(todo)
      });

      const responseBody = await response.json();
      return response.ok ? null : new ApiError(responseBody);
    } catch (error) {
      return new ApiError(error as Error);
    }
  }

  async getTodos(): Promise<[Todo[], Error | null]> {
    try {
      const response = await fetch(BASE_URL);
      const todosOrError = await response.json();
      return response.ok
        ? [todosOrError, null]
        : [[], new ApiError(todosOrError)];
    } catch (error) {
      return [[], new ApiError(error as Error)];
    }
  }
}

const todoService = new TodoServiceImpl();
export default todoService;
