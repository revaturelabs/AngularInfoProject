import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/typescript/access/access.component';


// Specify Routes of the Application
export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: 'access', component: AccessComponent },
    { path: 'datatypes', component: DatatypesComponent },
    { path: 'databinding', component: DatabindingComponent}

];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
