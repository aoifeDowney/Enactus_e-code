import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";


@Injectable()
export class CompetitionService {

    url = "http://DESKTOP-KAAD8A1:8444//E_CodeEmail/";
    url2 = "http://DESKTOP-KAAD8A1:8444///E_log/";

    constructor(private http: HttpClient) {}

    getConfig(email: string) {
        return this.http.get(this.url + email);
      }

      getApi(name: string) {
        return this.http.get(this.url2 + name);
      }

}