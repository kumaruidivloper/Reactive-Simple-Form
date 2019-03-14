import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  public userForm: FormGroup;

  constructor() { 
    this.userForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      size: new FormControl()
    })
    this.send(); 
  }

  send() {
    console.log(this.userForm.value);
  }

  ngOnInit() {
  }

}
