import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import {HotplaceComponent} from './components/hotplace/hotplace.component';
import { ChatdetailComponent } from './components/chatdetail/chatdetail.component';
import { ChatsComponent } from './components/chats/chats.component';
import { AddchatComponent} from './components/addchat/addchat.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'hotplace', component: HotplaceComponent },
  { path: 'chats/:id', component: ChatdetailComponent },
  { path: 'chats', component: ChatsComponent },
  { path: 'addchat', component: AddchatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
