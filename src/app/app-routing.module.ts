import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessComponent } from './components/typescript/access/access.component';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { NpmComponent } from './components/bundling/npm/npm.component';

// Specify Routes of the Application
export const routes: Routes = [
    { path: 'intro', component: IntroductionComponent },
    { path: 'access', component: AccessComponent },
    { path: 'databinding', component: DatabindingComponent},
    { path: 'npm', component: NpmComponent }
    // { path: 'angularcli', component: AngularcliComponent },
    // { path: 'packjs', component: PackjsComponent }
];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
