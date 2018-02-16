import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DatabindingdefinitionComponent } from './components/definitions/databindingdefinition/databindingdefinition.component';
import { ModulesComponent } from './components/definitions/modules/modules.component';

// Specify Routes of the Application
export const routes: Routes = [
  { path: 'definitions/databinding', component: DatabindingdefinitionComponent },
  { path: 'modules', component: ModulesComponent}
];


// Decorator for a module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class GoatRoutingModule { }
