import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AdvancedTypesComponent } from '../../components/typescript/advanced-types/advanced-types.component';


const routes: Routes = [
  { path: 'advanced-types', component: AdvancedTypesComponent}
];
>>>>>>> 0782c12a4bb164b7ff82cb6f497286182130e123

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvilSchemeRoutingModule { }
