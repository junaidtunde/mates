import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-dashers',
  templateUrl: './dashers.component.html',
  styleUrls: ['./dashers.component.scss']
})
export class DashersComponent implements OnInit {

  @ViewChild('section') public section: ElementRef;

  constructor(private title: Title) {
    this.title.setTitle('Dashers');
  }

  ngOnInit() {
  }

  moveToSection(): void {
    this.section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

}
