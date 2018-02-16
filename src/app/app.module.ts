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

// NgModule Decorator
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AccessComponent,
    NavbarComponent,
    DatabindingComponent,
<<<<<<< HEAD
    DatabindingdefinitionComponent
=======
    DatatypesComponent
>>>>>>> a9e0e4843a4bfc40c43128de8baca1be1321e9bd
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
