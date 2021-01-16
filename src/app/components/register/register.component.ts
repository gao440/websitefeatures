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
import { CrudService } from '../../service/crud.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  Roles: any = ['Admin', 'Reader'];


  constructor(public crudService: CrudService, private router: Router) {

  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('working');
    console.log('Your form data : ', form.value);
    let data = form.value;
    alert(data);


    this.crudService.create_newfriend(data).then(res => {
      console.log("saved to firebase");
      console.log(res);

    }).catch(error => {
      console.log("failed to add data to firebase");
      console.log(error);
    })
   
    this.router.navigateByUrl('/addchat');
  }
}