import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './components/definitions/decorator/decorator.component';

// Specify Routes of the Application
export const routes: Routes = [
    { path: 'decorator', component: DecoratorComponent }

];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class RattlesnakeRoutingModule {}
