
import { TypescriptComponent } from './components/definitions/typescript/typescript.component';
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { IteratorsComponent } from './components/typescript/iterators/iterators.component';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { NpmComponent } from './components/bundling/npm/npm.component';
import { AngularcliComponent } from './components/bundling/angularcli/angularcli.component';
import { EnumerationsComponent } from './components/typescript/enumerations/enumerations.component';
import { ModulesComponent } from './components/definitions/modules/modules.component';

//  Specify routs of the Application
export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: 'iterators', component: IteratorsComponent },
    { path: 'access', component: AccessComponent },
    { path: 'databinding', component: DatabindingComponent},
    { path: 'typescript-def', component: TypescriptComponent },
    { path: 'npm', component: NpmComponent },
    { path: 'angularcli', component: AngularcliComponent },
    // { path: 'packjs', component: PackjsComponent }
    { path: 'enumerations', component: EnumerationsComponent},
<<<<<<< HEAD
    { path: 'datatypes', component: DatatypesComponent }
=======
    { path: 'datatypes', component: DatatypesComponent },
    { path: 'databinding', component: DatabindingComponent},
    { path: 'modules', component: ModulesComponent}
>>>>>>> 5c5ec2284af02d45ec1b522d446bf7fcb8b2741d
];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
