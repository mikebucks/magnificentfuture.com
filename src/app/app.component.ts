import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

  animations: [
    trigger('navState', [
      state('inactive', style({
        opacity: .5,
        transform: 'scale(0)'
      })),
      state('active',   style({
        opacity: 1,
        transform: 'scale(1)'
      })),
      transition('inactive => active', animate('250ms ease-in')),
      transition('active => inactive', animate('250ms ease-out'))
    ])
  ]
})

export class AppComponent {
  items: FirebaseListObservable<any[]>;
  navPressScale: String;
  navPosition;
  navigationState: String;
  navigationTimerState: String;

  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
    this.navPressScale = '0px';
    this.navigationState = 'inactive';
    this.navigationTimerState = 'inactive';
    this.navPosition = {
      x: '0px',
      y: '0px'
    }
  }

  private positionNav = (evt) => {
    this.navPosition.x = evt.clientX + 'px';
    this.navPosition.y = evt.clientY + 'px';
  }

  private startNavTrigger = (evt) => {
    this.navigationState = 'active';
    window.setTimeout(() => {
      this.navigationTimerState = 'active';
    }, 300);
  }

  private stopNavTrigger = (evt) => {
    this.navigationState = 'inactive';
    this.navigationTimerState = 'inactive';
  }

}
