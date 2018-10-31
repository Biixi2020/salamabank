import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http:Http) {}


    getData() {

        return this.http.get('https://safe-refuge-80466.herokuapp.com/api/Books').pipe(map(res => res.json()));
        
    }

    PostData(){
        return this.http.post("https://safe-refuge-80466.herokuapp.com/api/Book",{}).pipe(map(res => res.json()));
    }

}