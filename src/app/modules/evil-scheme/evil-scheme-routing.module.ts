import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from '../../components/typescript/services/services.component';

const routes: Routes = [
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvilSchemeRoutingModule { }
