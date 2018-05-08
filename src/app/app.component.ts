import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TwitterService } from './seo/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-air';

  constructor(private twitter: TwitterService) { }
  
  ngOnInit() {
    this.twitter.setTwitterMeta({
      cardType: 'summary',
      title: 'Universal Air!',
      description: 'Application for Demo purposes built Live!',
      site: '@AngularAir'
    });
  }
}
