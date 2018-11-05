import {
  Directive, Input, HostBinding,
  Component, ContentChildren, AfterViewInit,
  QueryList, EventEmitter, Output, AfterContentInit
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'bu-tab',
})
export class TabDirective {
  private static seed = 0;

  readonly id: number;

  @Input() header: string;
  @Input() icon: string;

  @HostBinding('hidden') isHidden: boolean = true;
  private isActive: boolean = false;

  @Input() set active(value: boolean) {
    this.isActive = value;
    this.isHidden = !this.isActive;
  }

  get active(): boolean {
    return this.isActive;
  }

  constructor() {
    this.id = TabDirective.seed++;
    // this.isHidden = true;
    // this.isActive = false;
  }
}

@Component({
  selector: 'bu-tabs',
  template: `
    <div class="tabs" [ngClass]="{
      'is-centered': alignment === 'centered',
      'is-right': alignment === 'right',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-boxed': boxed,
      'is-toggle': toggle,
      'is-toggle-rounded': toggleRounded,
      'is-fullwidth': fullwidth
    }">
      <ul>
          <li *ngFor="let tab of tabs" [class.is-active]="tab.active">
            <a (click)="selectTab(tab)">
                <bu-icon [name]="tab.icon" *ngIf="tab.icon"></bu-icon>
                <span>{{tab.header}}</span>
            </a>
          </li>
      </ul>
    </div>

    <ng-content></ng-content>
    `,
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabDirective) tabs: QueryList<TabDirective>;

  @Input() alignment: 'centered' | 'right';
  @Input() size: 'small' | 'medium' | 'large';
  @Input() boxed: boolean;
  @Input() toggle: boolean;
  @Input() toggleRounded: boolean;
  @Input() fullwidth: boolean;

  @Output() select = new EventEmitter<TabDirective>();

  private selectedTab: TabDirective;

  ngAfterContentInit(): void {
    if (this.tabs && this.tabs.length > 0) {
      this.selectedTab = this.tabs.find(tab => tab.active) || this.tabs.first;
      this.selectedTab.active = true;
    }
  }

  selectTab(tab: TabDirective) {
    this.selectedTab.active = false;
    this.selectedTab = tab;
    this.selectedTab.active = true;
    this.select.emit(tab);
  }
}

