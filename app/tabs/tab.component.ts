import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'tab',
  template: `
  <ng-template #title>
    <ng-content select="tab-title"></ng-content>
  </ng-template>
  <ng-template #content>
    <ng-content select="tab-content"></ng-content>
  </ng-template>
  `,
})
export class TabComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  @ViewChild('title') title: ElementRef;

  @Input()
  active: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }
}
