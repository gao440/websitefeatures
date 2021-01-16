import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Chat } from '../../models/chat.model';
import { ChatserviceService } from '../../service/chatservice.service';

import { Router } from "@angular/router";
import { zip } from 'rxjs';
@Component({
  selector: 'app-addchat',
  templateUrl: './addchat.component.html',
  styleUrls: ['./addchat.component.css']
})
export class AddchatComponent implements OnInit {

  chat: Chat = new Chat();
  submitted = false;
  constructor(private chatService: ChatserviceService, private router: Router) {

  }

  ngOnInit(): void {
    this.submitted = false;
    this.chat = new Chat();
  }


  onSubmit(form: NgForm) {

    console.log('Your form data : ', form.value);

    /* 
 
     this.chatService.create(this.chat).then(() => {
       console.log('Created new item successfully!');
       this.submitted = true;
     }); */
    let addded = false;

    let data = form.value;
    this.chatService.createbyjsondata(data).then(res => {
      addded = true;
    }).catch(error => {
      console.log("failed to add data to firebase");
      console.log(error);
    })
    //alert(addded);
    //if (addded) {
      this.router.navigateByUrl('/chats');
    //}

  }

  newChat(): void {
    this.submitted = false;
    this.chat = new Chat();
  }

}
