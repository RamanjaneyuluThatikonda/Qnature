import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BinfoComponent } from './binfo.component';

describe('BinfoComponent', () => {
  let component: BinfoComponent;
  let fixture: ComponentFixture<BinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
