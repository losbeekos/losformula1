import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTrComponent } from './tr.component';

describe('TableTrComponent', () => {
  let component: TableTrComponent;
  let fixture: ComponentFixture<TableTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableTrComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
