import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';

import { HotplaceComponent } from './components/hotplace/hotplace.component';
import { ChatsComponent } from './components/chats/chats.component';
import { ChatdetailComponent } from './components/chatdetail/chatdetail.component';
import { AddchatComponent } from './components/addchat/addchat.component';
import {CrudService} from './service/crud.service';
import {ChatserviceService} from './service/chatservice.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    HotplaceComponent,
    ChatsComponent,
    ChatdetailComponent,
    AddchatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [CrudService, ChatserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }