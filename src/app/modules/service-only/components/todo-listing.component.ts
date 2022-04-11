import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoStoreService } from '../store/todo-store.service';

@Component({
  selector: 'app-todo-listing',
  templateUrl: './todo-listing.component.html'
})
export class TodoListingComponent implements OnInit {
  public todos$: Observable<any>;
  public todoTypeInput = '';

  @Input() set todoType(value: string) {
    switch (value) {
      case 'generated':
        this.todos$ = this.todoStore.generatedTodos$;
        break;
      case 'selected':
        this.todos$ = this.todoStore.selectedTodos$;
        break;
    }
    this.todoTypeInput = value;
  }


  constructor(public todoStore: TodoStoreService) { }

  ngOnInit(): void {
    console.log(this.todos$);

  }

}
