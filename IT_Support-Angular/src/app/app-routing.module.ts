import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipementComponent} from "./components/equipement/equipement.component";
import {AddEquipementComponent} from "./components/add-equipement/add-equipement.component";
import {AppComponent} from "./app.component";
import {UpdateEquipementComponent} from "./components/update-equipement/update-equipement.component";

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'addEquipement', component:AddEquipementComponent},
  {path:'equipements', component: EquipementComponent},
  {path:'updateEquipement/:id', component: UpdateEquipementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
