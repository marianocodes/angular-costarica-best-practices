import { Component, OnInit } from '@angular/core';
import { SessionService } from '../app/session.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(public sessionService: SessionService) { }

  ngOnInit() { }

}
