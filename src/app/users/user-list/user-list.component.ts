import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user';
import { UsersService } from 'src/app/shared/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  page : number = 1;
 
   constructor(public usersService : UsersService,private toastr: ToastrService) { }

  ngOnInit(): void {
    // Life Cycle Hook - Initialize
    console.log("Welcome Life Cycle Hook");
    // Testing
    this.usersService.bindGetAllUsersList();
    
  }

  //Subscribe getAllUsers
  getAllUsersList()
  {
    //Call Service
    this.usersService.getAllUSers().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },
      (error) =>{
        console.log("Something Wrong");
        console.log(error);
      }
    )
  }

  populateForm(user:User)
  {
    this.usersService.formUserData = Object.assign({},user);
  }

  deleteUserRecord(user : User)
  {
    if(confirm("Confirm delete? It can't be undone."))
    {
      this.usersService.deleteUser(user).subscribe(
        (result) =>{
          console.log(result);
          // window.location.reload();
          this.usersService.bindGetAllUsersList();
        }
      );
    }
    this.toastr.warning('Deleted', 'Deleted User');
    return;
    
  }

}
