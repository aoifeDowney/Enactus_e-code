import { Component, OnInit } from '@angular/core';

import { CompetitionService } from "../../../shared/competition.service";

@Component({
  selector: 'app-can',
  templateUrl: './can.component.html',
  styleUrls: ['./can.component.css'],
  providers: [CompetitionService]
})

export class CanComponent implements OnInit {

  componentName = 'can';

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitionService.getApi(this.componentName).subscribe();
  }

}
