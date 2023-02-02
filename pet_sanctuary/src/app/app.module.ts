import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPetComponent,
    PetEditComponent,
    PetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
