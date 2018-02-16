import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { GoatRoutingModule } from './/goat-routing.module';
import { DatabindingdefinitionComponent } from './components/definitions/databindingdefinition/databindingdefinition.component';
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';
import { EnumerationsComponent } from './components/typescript/enumerations/enumerations.component';
import { ModulesComponent } from './components/definitions/modules/modules.component';

// NgModule Decorator
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AccessComponent,
    NavbarComponent,
    DatabindingComponent,
    DatabindingdefinitionComponent,
    DatatypesComponent,
    EnumerationsComponent,
    ModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GoatRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
