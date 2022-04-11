
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceOnlyComponent } from './service-only.component';
import { TodoListingComponent } from './components/todo-listing.component';



@NgModule({
  declarations: [
    ServiceOnlyComponent,
    TodoListingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceOnlyModule { }
