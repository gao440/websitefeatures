import { Component, OnInit } from '@angular/core';
/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../../service/crud.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public crudService: CrudService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log('working');
    console.log('Your form data : ', form.value);
    let data = form.value;
    alert(data);

  /*
    this.crudService.create_newfriend(data).then(res => {
      console.log("saved to firebase");
      console.log(res);

    }).catch(error => {
      console.log("failed to add data to firebase");
      console.log(error);
    })
    */ 
    this.router.navigateByUrl('/addchat');
  }
}
