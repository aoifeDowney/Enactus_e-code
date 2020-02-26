import { Component, OnInit } from '@angular/core';

import { CompetitionService } from "../../shared/competition.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [CompetitionService]
})

export class ProductComponent implements OnInit {

  componentName = 'product';

  constructor(private competitionService: CompetitionService) {}

  ngOnInit() {
    this.competitionService.getApi(this.componentName).subscribe();
  }

}
