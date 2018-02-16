import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancedTypesComponent } from '../../components/typescript/advanced-types/advanced-types.component';


const routes: Routes = [
  { path: 'advanced-types', component: AdvancedTypesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvilSchemeRoutingModule { }
