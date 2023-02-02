import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { PetDetailComponent } from './components/pet-detail/pet-detail.component';
import { PetEditComponent } from './components/pet-edit/pet-edit.component';

const routes: Routes = [
  {
    path:'',redirectTo:'pet-detail',pathMatch:'full'
  },
  {
    path:'pet-detail',component:PetDetailComponent
  },
  {
    path:'add-pet',component:AddPetComponent
  },
  {
    path:'edit-pet/:id',component:PetEditComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
