import { Component, AfterContentInit, ViewEncapsulation, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  template: `
  <div class="tabs__titles">
  <ng-container  *ngFor="let tab of tabs">
    <div 
      class="tabs__title"
      [class.tabs__title--active]="tab.active"
      (click)="setActive(tab)">
      <ng-container *ngTemplateOutlet="tab.title"></ng-container>
    </div>
  </ng-container>
  </div>
  <div *ngFor="let tab of tabs">
    <ng-container *ngIf="tab.active">
      <ng-container *ngTemplateOutlet="tab.content"></ng-container>
   </ng-container>
  </div>
  `,
  styleUrls: ['../../styles.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.activateFirst();
    this.tabs.changes.subscribe((newTabs) => {
      if( !newTabs.some(tab => tab.active) && newTabs.length > 0 ) {
        this.activateFirst();
      }
    })
  }
  setActive(tab: TabComponent) {
    this.deactivateAll();
    tab.active = true;
  }
  deactivateAll() {
    this.tabs.forEach(tab => tab.active = false);
  }
  activateFirst() {
    this.setActive(this.tabs.first);
  }
}
