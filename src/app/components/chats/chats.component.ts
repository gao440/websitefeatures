import { Component, OnInit } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { ChatserviceService } from '../../service/chatservice.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {


  chats?: Chat[];
  currentChat?: Chat;
  currentIndex = -1;
  title = '';

  constructor(private chatService: ChatserviceService) { }

  ngOnInit(): void {
    this.retrieveChats();
  }

  refreshList(): void {
    this.currentChat = undefined;
    this.currentIndex = -1;
    this.retrieveChats();
  }

  retrieveChats(): void {
    this.chatService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.chats = data;
      console.log("get all data" + this.chats.length);
    });
  }

  setActiveChat(chat: Chat, index: number): void {
    this.currentChat = chat;
    this.currentIndex = index;
  }

}
