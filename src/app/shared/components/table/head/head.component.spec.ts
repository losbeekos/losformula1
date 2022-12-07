import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadComponent } from './head.component';

describe('TableHeadComponent', () => {
  let component: TableHeadComponent;
  let fixture: ComponentFixture<TableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableHeadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
