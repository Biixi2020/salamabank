import { Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isloading:boolean = false;

  constructor(private router:Router) {
    router.events.subscribe((event)=> {
      this.checkRouterEvent(event);

    });
  }

  checkRouterEvent(event: Event):void{


    if(event instanceof NavigationStart) {
      this.isloading = true;
    }

    if(event instanceof NavigationCancel || event instanceof NavigationError || event instanceof NavigationEnd){
      this.isloading = false;
    }

  }

   
}
