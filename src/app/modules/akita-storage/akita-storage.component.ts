import { Component, OnInit } from '@angular/core';
import { TodoService } from './store/todo.service';

@Component({
  selector: 'app-akita-storage',
  templateUrl: './akita-storage.component.html',
  styleUrls: ['./akita-storage.component.scss'],
})
export class AkitaStorageComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  public generateTodo(): void {
    this.todoService.generate();
  }
}
