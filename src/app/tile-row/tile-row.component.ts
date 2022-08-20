import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-tile-row',
  templateUrl: './tile-row.component.html',
  styleUrls: ['./tile-row.component.scss']
})
export class TileRowComponent implements OnInit {

  @Input() url: any = "";
  @Input() title: any = "";

  Movies: any = [];

  constructor(public service: ServiceService) { }

  ngOnInit(): void {
    this.getData(this.url);
  }

  getData(url: string) {
    this.service.getData(url)
      .subscribe((data: any) => {

        this.Movies = data.results;

      }, (error: any) => {
        console.error(error);
      })
  }

  getTitle(title: string) {
    const result = title.replace(/([A-Z])/g, " $1");
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    return finalResult;
  }

}
