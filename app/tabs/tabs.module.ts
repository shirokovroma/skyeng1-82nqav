import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { TabTitleComponent } from './tab-title.component';
import { TabContentComponent } from './tab-content.component';

@NgModule({
  declarations: [TabsComponent, TabComponent, TabTitleComponent, TabContentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent, TabComponent, TabTitleComponent, TabContentComponent
  ]
})
export class TabsModule { }
