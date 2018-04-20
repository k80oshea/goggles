import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllPetsComponent } from './components/all-pets/all-pets.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import { DetailPetComponent } from './components/detail-pet/detail-pet.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: AllPetsComponent },
  { path: "new", pathMatch: 'full', component: CreatePetComponent },
  { path: "details/:id", pathMatch: 'full', component: DetailPetComponent },
  { path: "edit/:id", pathMatch: 'full', component: EditPetComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
