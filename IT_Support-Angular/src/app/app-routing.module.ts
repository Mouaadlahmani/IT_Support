import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipementComponent} from "./components/equipement/equipement.component";
import {AddEquipementComponent} from "./components/add-equipement/add-equipement.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'addEquipment', component:AddEquipementComponent},
  {path: 'equipments', component: EquipementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
