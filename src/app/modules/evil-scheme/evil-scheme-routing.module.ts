import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedTypesComponent } from '../../components/typescript/advanced-types/advanced-types.component';
import { PromisesComponent } from '../../components/typescript/promises/promises.component';
import { ServicesComponent } from '../../components/typescript/services/services.component';

const routes: Routes = [
  { path: 'advanced-types', component: AdvancedTypesComponent},
  { path: 'promises', component: PromisesComponent},
  { path: 'services', component: ServicesComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvilSchemeRoutingModule { }
