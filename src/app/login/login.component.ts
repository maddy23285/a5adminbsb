import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  constructor(private global:GlobalService) { 
  }

  ngOnInit() {
  }

}
