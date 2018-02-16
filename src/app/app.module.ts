import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './components/typescript/introduction/introduction.component';
import { AccessComponent } from './components/typescript/access/access.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DatabindingComponent } from './components/demos/databinding/databinding.component';
<<<<<<< HEAD
import { DecoratorComponent } from './components/definitions/decorator/decorator.component';
import { RattlesnakeRoutingModule } from './rattlesnake-routing.module';
import { ComponentComponent } from './components/definitions/component/component.component';
=======
import { DatatypesComponent } from './components/typescript/datatypes/datatypes.component';
>>>>>>> a9e0e4843a4bfc40c43128de8baca1be1321e9bd

// NgModule Decorator
@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    AccessComponent,
    NavbarComponent,
    DatabindingComponent,
<<<<<<< HEAD
    DecoratorComponent,
    ComponentComponent
=======
    DatatypesComponent
>>>>>>> a9e0e4843a4bfc40c43128de8baca1be1321e9bd
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    RattlesnakeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
