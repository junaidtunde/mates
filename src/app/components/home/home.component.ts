import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  animationNumber: number;
  animationList = ['bounceInLeft', 'rubberBand', 'shake', 'slideInLeft', 'rollIn', 'wobble', 'swing'];
  animationName: string;

  constructor(private title: Title) {
    this.title.setTitle('Home');
    this.animationNumber = Math.floor(Math.random() * 6) + 1;
    this.animationName = this.animationList[this.animationNumber];
  }

  ngOnInit() {
    $(window).on('resize', function () {
      if ($(window).width() > 568) {
        $('#foreground').addClass('background');
        $('#ground').removeClass('background');
      } else {
        $('#foreground').removeClass('background');
        $('#ground').addClass('background');
      }
    });
    if ($(window).width() > 568) {
      $('#foreground').addClass('background');
      $('#ground').removeClass('background');
    } else {
      $('#foreground').removeClass('background');
      $('#ground').addClass('background');
    }
  }

}
