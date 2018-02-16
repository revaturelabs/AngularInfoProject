import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
import { NpmComponent } from './components/bundling/npm/npm.component';
import { BundlingComponent } from './components/bundling/bundling.component';
import { AngularcliComponent } from './components/bundling/angularcli/angularcli.component';
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';
import { EnumerationsComponent } from './components/typescript/enumerations/enumerations.component';

// NgModule Decorator
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AccessComponent,
    NavbarComponent,
    DatabindingComponent,
    NpmComponent,
    BundlingComponent,
    AngularcliComponent,
    DatatypesComponent,
    EnumerationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
