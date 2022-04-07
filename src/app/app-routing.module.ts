import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeModule } from './modules/home/home.module';
import { HomeComponent } from './modules/home/home.component';
import { ServiceOnlyModule } from './modules/service-only/service-only.module';
import { ServiceOnlyComponent } from './modules/service-only/service-only.component';
import { NgxsStorageModule } from './modules/ngxs-storage/ngxs-storage.module';
import { NgxsStorageComponent } from './modules/ngxs-storage/ngxs-storage.component';
import { AkitaStorageModule } from './modules/akita-storage/akita-storage.module';
import { AkitaStorageComponent } from './modules/akita-storage/akita-storage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'service-only', component: ServiceOnlyComponent },
  { path: 'ngxs-storage', component: NgxsStorageComponent },
  { path: 'akita-storage', component:  AkitaStorageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    ServiceOnlyModule,
    NgxsStorageModule,
    AkitaStorageModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
