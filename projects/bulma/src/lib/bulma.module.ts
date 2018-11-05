import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent, CrumbDirective } from './components/breadcrumb.component';
import { SubtitleDirective } from './modifiers/subtitle.directive';
import { TileDirective } from './layout/tile.directive';
import { MessageComponent } from './components/message.component';
import { NotificationComponent } from './elements/notification.component';
import { ImageComponent } from './elements/image.component';
import { IconComponent } from './elements/icon.component';
import { BoxComponent, BoxDirective } from './elements/box.component';
import { SmallDirective, NormalDirective, MediumDirective, LargeDirective } from './modifiers/size.directive';
import { TagComponent } from './elements/tag.component';
import { DeleteDirective } from './modifiers/delete.directive';
import { TabsComponent, TabDirective } from './components/tabs.component';
import { ColumnsComponent, ColumnComponent } from './layout/columns.component';
import { ButtonDirective } from './elements/button.directive';
import { TitleDirective } from './modifiers/title.directive';
import {
  DangerDirective, WarningDirective, SuccessDirective,
  InfoDirective, PrimaryDirective, BlackDirective,
  DarkDirective, WhiteDirective
} from './modifiers/color.directive';

const publicDirectives = [
  ButtonDirective,
  DeleteDirective,
  TagComponent,
  TitleDirective,
  SubtitleDirective,
  BoxComponent,
  BoxDirective,
  IconComponent,
  ImageComponent,
  NotificationComponent,
  MessageComponent,
  TabsComponent,
  TabDirective,
  ColumnsComponent,
  ColumnComponent,
  TileDirective,
  BreadcrumbComponent,
  CrumbDirective,


  DangerDirective,
  WarningDirective,
  SuccessDirective,
  InfoDirective,
  PrimaryDirective,
  BlackDirective,
  DarkDirective,
  WhiteDirective,

  SmallDirective,
  NormalDirective,
  MediumDirective,
  LargeDirective,
];

const privateDirectives = [
];

@NgModule({
  imports: [CommonModule],
  declarations: [...publicDirectives, ...privateDirectives],
  exports: publicDirectives,
})
export class BulmaModule { }
