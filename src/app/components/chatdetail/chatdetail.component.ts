import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import {Chat} from '../../models/chat.model';
import {ChatserviceService} from '../../service/chatservice.service';

@Component({
  selector: 'app-chatdetail',
  templateUrl: './chatdetail.component.html',
  styleUrls: ['./chatdetail.component.css']
})
export class ChatdetailComponent implements OnInit, OnChanges {

  @Input() chat?: Chat;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentChat: Chat = {
    email: '',
    show: '',
    url: '',
    episode:''
  };

  message = '';

  constructor(private chatService: ChatserviceService) { }

  ngOnInit(): void {
    this.message = '';
  }
  
  ngOnChanges(): void {
    this.message = '';
    this.currentChat = { ...this.chat };
  }
  /*
  updatePublished(status: boolean): void {
    if (this.currentChat.id) {
      this.chatService.update(this.chat.id, { published: status })
      .then(() => {
        this.chatService. = status;
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }
  */
  updateChat(): void {
    const data = {
      show: this.currentChat.show,
      url: this.currentChat.url
    };

    if (this.currentChat.id) {
      this.chatService.update(this.currentChat.id, data)
        .then(() => this.message = 'The chat was updated successfully!')
        .catch(err => console.log(err));
    }
  }
 
  deleteChat(): void {
    if (this.currentChat.id) {
      this.chatService.delete(this.currentChat.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The chat was deleted successfully!';
        })
        .catch(err => console.log(err));
    }
  }

}
