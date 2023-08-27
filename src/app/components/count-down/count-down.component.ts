import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  date: any;
  months = 0;
  days = 0;
  minutes = 0;
  seconds = 0;
  day1: any;

  ngOnInit(): void {

    this.date = new Date("28 November, 2023 00:00:00").getTime();
    this.setDate()
    this.day1 = new Date("30 November, 2023 00:00:00").getDate()
  }

  setDate() {
    setInterval(() => {
      var now = new Date().getTime();
      var difference = this.date - now;
      this.months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30))
      this.days = this.getDays(this.day1)
      this.minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60))
      this.seconds = Math.floor(difference % (1000 * 60) / 1000)
    }, 1000)

  }

  getDays(day1: number) {
    let day2 = new Date().getDate()
    if (day1 < day2) {
      var date = new Date();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      return (new Date(year, month, 0).getDate() - day2 + day1)
    }

    return day1 - day2

  }

}


