import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipementComponent} from "./components/AdminComponents/equipement/equipement.component";
import {AddEquipementComponent} from "./components/AdminComponents/add-equipement/add-equipement.component";
import {AppComponent} from "./app.component";
import {UpdateEquipementComponent} from "./components/AdminComponents/update-equipement/update-equipement.component";
import {CreatePanneComponent} from "./components/AdminComponents/create-panne/create-panne.component";
import {PannesComponent} from "./components/AdminComponents/pannes/pannes.component";
import {ChangerStatutComponent} from "./components/AdminComponents/changer-statut/changer-statut.component";
import {UpdatePanneComponent} from "./components/AdminComponents/update-panne/update-panne.component";
import {TicketComponent} from "./components/AdminComponents/ticket/ticket.component";
import {EquipementsComponent} from "./components/UtilisateurComponents/equipements/equipement.component";

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'addEquipement', component:AddEquipementComponent},
  {path:'tikets', component:TicketComponent},
  {path:'equipements', component: EquipementComponent},
  {path:'utilisateur/equipements', component: EquipementsComponent},
  {path:'updateEquipement/:id', component: UpdateEquipementComponent},
  {path:'addPanne', component: CreatePanneComponent},
  {path:'pannes', component: PannesComponent},
  {path:'statut/:id', component:ChangerStatutComponent},
  {path:'updatePanne/:id', component: UpdatePanneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
