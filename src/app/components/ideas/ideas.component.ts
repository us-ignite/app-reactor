import { Component, OnInit } from '@angular/core';
import { Scenario } from '../../models/scenario';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  scenarios: Scenario[];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.scenarios = this.dataService.getData();
  }

}
