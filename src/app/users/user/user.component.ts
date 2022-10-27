import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  // DI : Constructor Injection
  constructor(public usersService:UsersService) { }

  //Life Cycle Hook
  ngOnInit(): void
  {
    this.usersService.bindGetAllRolesList();
  }

  //Submit Form
  onSubmit(form)
  {
    console.log(form.value);
    // return;
  
    // INSERT(id==00) or UPDATE(id>=0)
    let insertId = this.usersService.formUserData.userId;

    //checking for Insert or Update
    if(insertId==0 || insertId == null)
    {
      //INSERT
      this.insertUserRecord(form);

    }
    else
    {
      //UPDATE
     this.updateUserRecord(form);  
    }
  }

  //Insert Method
  insertUserRecord(form?: NgForm)
  {
    console.log("Inserting a record");
    console.log(form.value);
    // return;
    this.usersService.insertUser(form.value).subscribe(
      (result) =>{
        console.log(result);
        // window.location.reload();
        this.usersService.bindGetAllUsersList();
      }
    );
  }

  //Update Method
  updateUserRecord(form?: NgForm)
  {
    console.log("Updating the record");
    console.log(form.value);
    // return;
    this.usersService.updateUser(form.value).subscribe(
      (result) =>{
        console.log(result);
        // window.location.reload();
        this.usersService.bindGetAllUsersList();
      }
    );
  }
}
