import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  
  public userForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.userForm = fb.group({
      name: null,
      email: null,
      size: null
    })
    // this.send(); 
  }

  send() {
    console.log(this.userForm.value);
  }

  reset() {
    this.userForm.reset();
  }

  ngOnInit() {
  }

}
