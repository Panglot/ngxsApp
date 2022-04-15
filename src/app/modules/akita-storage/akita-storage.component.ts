import { Component } from '@angular/core';
import { TodoService } from './store/todo.service';

@Component({
  selector: 'app-akita-storage',
  templateUrl: './akita-storage.component.html',
})
export class AkitaStorageComponent {
  constructor(private todoService: TodoService) { }

  public generateTodo(): void {
    this.todoService.generate();
  }

  public clearGenerated(): void {
    this.todoService.clearGenerated();
  }
}
