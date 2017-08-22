import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class GoldService {
    public goldResponse: Array<{ data: string, cena: number }> = new Array();
    
    constructor(private http: Http) { }
    
    getGoldDays(days: number): Observable<any> {
        return this.http.get("http://api.nbp.pl/api/cenyzlota/last/" + days.toString() + "/?format=json").map(res => res).share();
        // return this.http.get(`http://api.nbp.pl/api/cenyzlota/last/${days}/?format=json`).map(res => res).share();
    }

    getGold(): Observable<any> {
        return this.http.get('http://api.nbp.pl/api/cenyzlota/last/30/?format=json').map(res => res).share();
    }
}


