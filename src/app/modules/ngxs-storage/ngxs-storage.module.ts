import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsStorageComponent } from './ngxs-storage.component';
import { TodoListingNgxsComponent } from './components/todo-listing-ngxs.component';



@NgModule({
  declarations: [
    NgxsStorageComponent,
    TodoListingNgxsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxsStorageModule { }
