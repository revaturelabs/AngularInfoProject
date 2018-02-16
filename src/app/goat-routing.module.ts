import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
