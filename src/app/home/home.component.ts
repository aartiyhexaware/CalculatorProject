import { Component, OnInit } from '@angular/core';
import {User} from '../commonObject';
import {commonService} from '../common.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  LogedinUser: User;
  users: User[] = [];
  constructor(private serv:commonService)
   {
    this.LogedinUser= JSON.parse(localStorage.getItem('currentUser'));
    

    }

  ngOnInit(): void 
  {
    this.getLogedInUserDetails();
  }

  getLogedInUserDetails()
  {
    this.serv.getAll().pipe(first()).subscribe(users => { 
      this.users = users; 
      
  });

  }

}
