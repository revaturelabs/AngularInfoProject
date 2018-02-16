
import { TypescriptComponent } from './components/definitions/typescript/typescript.component';
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { IteratorsComponent } from './components/typescript/iterators/iterators.component';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { AdvancedTypesComponent } from './components/typescript/advanced-types/advanced-types.component';
import { NpmComponent } from './components/bundling/npm/npm.component';
import { AngularcliComponent } from './components/bundling/angularcli/angularcli.component';
import { EnumerationsComponent } from './components/typescript/enumerations/enumerations.component';
import { ModulesComponent } from './components/definitions/modules/modules.component';

//  Specify routs of the Application
export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: 'iterators', component: IteratorsComponent },
    { path: 'access', component: AccessComponent },
    { path: 'typescript-def', component: TypescriptComponent },
    { path: 'npm', component: NpmComponent },
    { path: 'angularcli', component: AngularcliComponent },
    // { path: 'packjs', component: PackjsComponent }
    { path: 'enumerations', component: EnumerationsComponent},
    { path: 'datatypes', component: DatatypesComponent },
    { path: 'databinding', component: DatabindingComponent},
    { path: 'modules', component: ModulesComponent}
];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
