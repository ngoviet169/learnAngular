import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  currentStyle = {color: 'red', fontSize: '40px'};
  oldStyle = {color: 'black', fontSize: '20px'};
  isHightlight = false;
  currentClass = {circle: this.isHightlight, square: !this.isHightlight};
  constructor() { }

  ngOnInit() {
  }

}
