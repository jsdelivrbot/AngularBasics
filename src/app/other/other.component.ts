import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor() { 
    
  }
  imagePath = "assets/lilGirl.jpeg";
  link = 'http://angular.io';
  story = "Pikachu speaks";
  title ="Pokemon";

  ngOnInit() {
  }

}
