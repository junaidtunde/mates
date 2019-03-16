import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-fleet-agreement',
  templateUrl: './fleet-agreement.component.html',
  styleUrls: ['./fleet-agreement.component.scss']
})
export class FleetAgreementComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Fleet Agreement');
  }

  ngOnInit() {
  }

}
