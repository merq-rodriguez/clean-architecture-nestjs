import { TodoM } from '../../domain/models/todo';
import { TodoRepository } from '../../domain/repositories/todo-repository.interface';

export class getTodosUseCases {
  constructor(private readonly todoRepository: TodoRepository) {}

  async execute(): Promise<TodoM[]> {
    return await this.todoRepository.findAll();
  }
}