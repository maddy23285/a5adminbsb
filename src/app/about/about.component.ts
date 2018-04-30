import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  paramid:number = 0;
  goals:any;
  constructor(private route:ActivatedRoute, private router:Router, private _data:DataService) { 
    this.route.params.subscribe(res => {
      this.paramid=res.id;
    });
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }
  backToHome()
  {
    this.router.navigate["home"];
  }
}
