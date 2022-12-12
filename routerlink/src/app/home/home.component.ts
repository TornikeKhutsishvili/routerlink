import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';
import { Human } from '../human.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dtsh: DatashareService, private router:Router) { }

  ngOnInit(): void {
  }
  human:Human = new Human();
  save(){
    this.dtsh.AddNewUser(this.human)
    console.log(this.human)
    this.router.navigate(['/all-user'])
  }
}
