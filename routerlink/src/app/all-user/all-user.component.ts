import { Human } from './../human.model';
import { DatashareService } from './../datashare.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute, private dtsh:DatashareService, private router: Router) { }
  hu:Human = new Human();

  arr:any[] = []
  error:Boolean = false

  ngOnInit(): void {

    this.arr = ([] as any[]).concat(this.dtsh.getData())

    this.activeroute.params.subscribe((resp:Params) =>{
      this.hu = resp as Human;
    })
    let fn = this.activeroute.snapshot.params['fname']
    let ind = this.arr.findIndex(i => i.fname == fn)
    if(ind==-1){
      this.error = true
      // this.router.navigate(['/error'])
    }
    else{
      this.error = false
    }
    console.log(this.arr)
  }
}
