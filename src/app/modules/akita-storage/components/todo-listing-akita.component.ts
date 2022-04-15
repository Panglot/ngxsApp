import { TodoService } from '../store/todo.service';
import { TodoQuery } from '../store/todo.query';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-listing-akita',
  templateUrl: './todo-listing-akita.component.html'
})
export class TodoListingAkitaComponent implements OnInit {
  @Input() todoType = '';
  // @Input() todoList = [];

  public todoList$: Observable<any>;

  constructor(private todoQuery: TodoQuery, private todoService: TodoService) { }

  ngOnInit(): void {
      switch (this.todoType) {
        case 'generated':
          this.todoList$ = this.todoQuery.selectTodoGeneratedList$;
          break;
        case 'selected':
          this.todoList$ = this.todoQuery.selectTodoSelectedList$;
          break;
      }
  }


  public select(key: string): void {
    this.todoService.select(key);
  }

  public unselect(key: string): void {
    this.todoService.unselect(key);
  }

  public complete(key: string): void {
    this.todoService.complete(key);
  }

  public removeSelected(key: string): void {
    this.todoService.removeSelected(key);
  }
}
