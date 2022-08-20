import { Component, OnInit } from '@angular/core';
import requests from '../services/request';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  movie: any = {};

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.getData(requests[0].link);
  }

  truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  getData(url: string) {
    this.service.getData(url)
      .subscribe((data: any) => {

        this.movie = data.results[
          Math.floor(Math.random() * data.results.length - 1)
        ];

      }, (error: any) => {
        console.error(error);
      })
  }
}
