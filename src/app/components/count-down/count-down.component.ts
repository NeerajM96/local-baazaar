import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  date: any;
  months = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  ngOnInit(): void {

    this.date = new Date("28 July, 2023 00:00:00").getTime();
    this.setDate()

  }

  setDate() {
    setInterval(() => {
      var now = new Date().getTime();
      //     let currentDate = new Date();
      //  let dateSent = new Date(this.date);
      var difference = this.date - now;
      this.months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
      // this.hours = Math.floor((Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())-Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) ) /(1000 * 60 * 60 * 24));
      this.minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
      this.seconds = Math.floor(difference % (1000 * 60) / 1000)
    }, 1000)

  }

}
