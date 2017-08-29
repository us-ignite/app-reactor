import { Component, OnInit } from '@angular/core';
import { Scenario } from '../../models/scenario';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss']
})
export class IdeaListComponent implements OnInit {
  scenarios: Scenario[];

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.scenarios = this.dataService.getData();
  }

}
