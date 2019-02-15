import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  public winnerNumber: number;

  constructor() { }

  public ngOnInit() {
    this.winnerNumber = Math.floor(Math.random() * 90 + 10);
  }

}