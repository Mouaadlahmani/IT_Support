import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EquipementComponent} from "./components/Equipement/equipement/equipement.component";
import {AddEquipementComponent} from "./components/Equipement/add-equipement/add-equipement.component";
import {AppComponent} from "./app.component";
import {UpdateEquipementComponent} from "./components/Equipement/update-equipement/update-equipement.component";
import {CreatePanneComponent} from "./components/AdminComponents/Panne/create-panne/create-panne.component";
import {PannesComponent} from "./components/AdminComponents/Panne/pannes/pannes.component";
import {ChangerStatutComponent} from "./components/Equipement/changer-statut/changer-statut.component";
import {UpdatePanneComponent} from "./components/AdminComponents/Panne/update-panne/update-panne.component";
import {TicketComponent} from "./components/AdminComponents/ticket/ticket.component";
import {EquipementsComponent} from "./components/UtilisateurComponents/equipements/equipement.component";
import {LoginComponent} from "./components/auth/login/login.component";
import {UtilisateursComponent} from "./components/AdminComponents/Utilisateur/utilisateurs/utilisateurs.component";
import {TechniciensComponent} from "./components/AdminComponents/Utilisateur/techniciens/techniciens.component";
import {AddUtilisateurComponent} from "./components/AdminComponents/Utilisateur/add-utilisateur/add-utilisateur.component";
import {
  AfficherUtilisateursComponent
} from "./components/AdminComponents/Utilisateur/afficher-utilisateurs/afficher-utilisateurs.component";
import {
  AfficherEquipementsComponent
} from "./components/Equipement/afficher-equipements/afficher-equipements.component";
import {AfficherPannesComponent} from "./components/AdminComponents/Panne/afficher-pannes/afficher-pannes.component";
import {
  AfficherTechniciensComponent
} from "./components/AdminComponents/Utilisateur/afficher-techniciens/afficher-techniciens.component";
import {AddTechnicienComponent} from "./components/AdminComponents/Utilisateur/add-technicien/add-technicien.component";
import {authGuardGuard} from "./guards/auth-guard.guard";
import {MyTicketsComponent} from "./components/UtilisateurComponents/my-tickets/my-tickets.component";

const routes: Routes = [
  {
    path: 'admin',
    component: UtilisateursComponent, canActivate:[authGuardGuard],
    children:[
      {path:'', component:AfficherUtilisateursComponent},
      {path:'add', component:AddUtilisateurComponent, canActivate:[authGuardGuard]},
      {path:'addEquipement', component:AddEquipementComponent, canActivate:[authGuardGuard]},
      {path:'techniciens', component:AfficherTechniciensComponent, canActivate:[authGuardGuard]},
      {path:'techniciens/add', component:AddTechnicienComponent, canActivate:[authGuardGuard]},
      {path:'tikets', component:TicketComponent, canActivate:[authGuardGuard]},
      {path:'equipements', component: AfficherEquipementsComponent, canActivate:[authGuardGuard]},
      {path:'equipements/add', component: AddEquipementComponent, canActivate:[authGuardGuard]},
      {path:'equipements/updateEquipement/:id', component: UpdateEquipementComponent, canActivate:[authGuardGuard]},
      {path:'addPanne', component: CreatePanneComponent, canActivate:[authGuardGuard]},
      {path:'pannes', component: AfficherPannesComponent, canActivate:[authGuardGuard]},
      {path:'pannes/add', component: CreatePanneComponent, canActivate:[authGuardGuard]},
      {path:'equipements/statut/:id', component:ChangerStatutComponent, canActivate:[authGuardGuard]},
      {path:'updatePanne/:id', component: UpdatePanneComponent, canActivate:[authGuardGuard]}
    ]

  },
  {path:'', component: AppComponent},
  {path:'login', component:LoginComponent},
  {path:'utilisateur/tikets', component:MyTicketsComponent, canActivate:[authGuardGuard]},
  {path:'utilisateur/equipements', component: EquipementsComponent, canActivate:[authGuardGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
