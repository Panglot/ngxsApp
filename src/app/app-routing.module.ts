import { Test1Module } from './modules/test1/test1.module';
import { Test1Component } from './modules/test1/test1.component';
import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'test-page-1', component: Test1Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    Test1Module
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
