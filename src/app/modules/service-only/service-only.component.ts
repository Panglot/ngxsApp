import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoStoreService } from './store/todo-store.service';

@Component({
  selector: 'app-service-only',
  templateUrl: './service-only.component.html',
  providers: [TodoStoreService]
})
export class ServiceOnlyComponent implements OnInit {
  public generatedTodos$: Observable<any> = this.todoStore.generatedTodos$;
  public selectedTodos$: Observable<any> = this.todoStore.selectedTodos$;

  constructor(public todoStore: TodoStoreService) { }

  ngOnInit(): void { }

}
