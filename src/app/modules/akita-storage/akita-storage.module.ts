import { TodoListingAkitaComponent } from './components/todo-listing-akita.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaStorageComponent } from './akita-storage.component';



@NgModule({
  declarations: [
    AkitaStorageComponent,
    TodoListingAkitaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AkitaStorageModule { }
