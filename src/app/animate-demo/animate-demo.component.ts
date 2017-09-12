import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-animate-demo',
  templateUrl: './animate-demo.component.html',
  styleUrls: ['./animate-demo.component.css'],
  animations:[
    trigger('buttonState',[
      state('inactive',style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1)'        
      })),
      //transition('inactive => active', animate('200ms ease-in')),
      //transition('active => inactive', animate('200ms ease-out')),
      transition('inactive => active', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('active => inactive', [
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class AnimateDemoComponent implements OnInit {

  public state = 'inactive';
  constructor() { }
  ngOnInit() {
  }
  
  toggleState() {
    this.state = (this.state === 'active' ? 'inactive' : 'active');
  }
}
