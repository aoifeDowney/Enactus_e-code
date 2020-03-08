import { Component, OnInit } from '@angular/core';

import { CompetitionService } from "../../../shared/competition.service";

@Component({
  selector: 'app-coffeecup',
  templateUrl: './coffeecup.component.html',
  styleUrls: ['./coffeecup.component.css'],
  providers: [CompetitionService]
})

export class CoffeeCupComponent implements OnInit {

  componentName = 'coffeecup';

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitionService.getApi(this.componentName).subscribe();
  }

}
