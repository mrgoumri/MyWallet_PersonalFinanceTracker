import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterDatePopoverPage } from './filter-date-popover.page';

describe('FilterDatePopoverPage', () => {
  let component: FilterDatePopoverPage;
  let fixture: ComponentFixture<FilterDatePopoverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterDatePopoverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterDatePopoverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
