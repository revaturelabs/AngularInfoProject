import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { RouterModule, Routes } from '@angular/router';
import { DatabindingdefinitionComponent } from './components/definitions/databindingdefinition/databindingdefinition.component';

// Specify Routes of the Application
export const routes: Routes = [
  { path: 'definitions/databinding', component: DatabindingdefinitionComponent }
];


// Decorator for a module
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})


export class GoatRoutingModule { }
=======
import { DatabindingComponent } from './components/demos/databinding/databinding.component';

// Specify Routes of the Application
export const routes: Routes = [
  { path: 'databinding', component: DatabindingComponent}

];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class GoatRoutingModule {}
>>>>>>> Created goat-routing-module
