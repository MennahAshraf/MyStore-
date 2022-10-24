import { Component, OnInit } from '@angular/core';
import { confData } from '../models/confData';
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  conf: confData = new confData;

  constructor(private fetchData:FetchDataService) { }

  ngOnInit(): void {

    this.conf=this.fetchData.confOrder
  }

}
