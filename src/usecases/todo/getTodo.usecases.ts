import { TodoM } from '../../domain/models/todo';
import { TodoRepository } from '../../domain/repositories/todo-repository.interface';

export class GetTodoUseCases {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(id: number): Promise<TodoM> {
    return await this.todoRepository.findById(id);
  }
}