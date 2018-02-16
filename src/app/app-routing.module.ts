import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/typescript/access/access.component';
import { IteratorsComponent } from './components/typescript/iterators/iterators.component';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { EnumerationsComponent } from './components/typescript/enumerations/enumerations.component';
import { ModulesComponent } from './components/definitions/modules/modules.component';

// Specify Routes of the Application
export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: 'iterators', component: IteratorsComponent },
    { path: 'access', component: AccessComponent },
    { path: 'enumerations', component: EnumerationsComponent},
    { path: 'datatypes', component: DatatypesComponent },
    { path: 'databinding', component: DatabindingComponent},
    { path: 'modules', component: ModulesComponent}
];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
