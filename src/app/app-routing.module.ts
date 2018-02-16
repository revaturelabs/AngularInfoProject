import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { DefinitionsComponent } from './components/definitions/definitions.component';


//  Specify routs of the Application
export const routes: Routes = [
    {path: 'intro', component: IntroductionComponent},
    {path: 'access', component: AccessComponent},
    {path: 'databinding', component: DatabindingComponent},
    {path: 'inheritance', component: DefinitionsComponent }
];

// Decorator for a module
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
