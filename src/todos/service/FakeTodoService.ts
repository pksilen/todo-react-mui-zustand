import { Todo } from '../model/Todo';
import { TodoService } from './TodoService';

class FakeTodoService implements TodoService {
  getTodos(): Promise<Todo[]> {
    return new Promise((resolve) =>
      setTimeout(
        () => resolve([{ id: '1', title: 'Dummy todo', isDone: false }]),
        1500
      )
    );
  }
}

const todoService = new FakeTodoService();
export default todoService;
