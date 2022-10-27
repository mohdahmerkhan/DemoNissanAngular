import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from './role';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //Global Variable
  formUserData: User = new User();

  //List of Users -- Retrieve all Records
  users: User[] = []; //All Users
  roles: Role[] = []; //All Roles

  constructor(private httpClient: HttpClient) {

  }

  //Call REST API
  //  1 Get all Users
  getAllUSers(): Observable<any> {
    //  http://localhost:9095/api/users
    return this.httpClient.get(environment.apiUrl + "/api/users");
  }

  //  2 Retrieve all Users for Listing
  bindGetAllUsersList() {
    this.httpClient.get(environment.apiUrl + '/api/users')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.users = response as User[];
        }
      );
  }




  bindGetAllRolesList() {
    this.httpClient.get(environment.apiUrl + '/api/roles')
      .toPromise()
      .then(
        (response) => {
          console.log(response);
          this.roles = response as Role[];
        }
      );
  }

  // 4- INSERT
  insertUser(user: User): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/users', user);
  }

  // 5- UPDATE
  updateUser(user: User): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/users', user);
  }

  // 6- DELETE
  deleteUser(user: User): Observable<any> {
    
    return this.httpClient.put(environment.apiUrl + '/api/users/'+user.userId, user);
  }

}
