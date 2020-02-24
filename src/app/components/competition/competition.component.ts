import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { CompetitionService } from "../../shared/competition.service";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [CompetitionService]
})
export class CompetitionComponent implements OnInit {

  emailValue: string;

  constructor(private http: HttpClient, private competitionService: CompetitionService) {}

  ngOnInit() {}

  sumbit() {
    this.competitionService.getConfig(this.emailValue)
    .subscribe(resp => {
      console.log(resp);
    });


    console.log("Button pressed!");
    console.log("Your email: " + this.emailValue);
  }

}
