import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from './data.Service';

@Injectable()

export class BooksResolver implements Resolve<any> {

    constructor(private dataService:DataService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any[]> {

        return this.dataService.getData();
    }
}