import { Component, OnInit } from '@angular/core';

import { CompetitionService } from "../../../shared/competition.service";

@Component({
  selector: 'app-waterbottle',
  templateUrl: './waterbottle.component.html',
  styleUrls: ['./waterbottle.component.css'],
  providers: [CompetitionService]
})

export class WaterBottleComponent implements OnInit {

  componentName = 'product';

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitionService.getApi(this.componentName).subscribe();
  }

}
