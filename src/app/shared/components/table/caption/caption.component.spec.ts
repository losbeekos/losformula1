import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCaptionComponent } from './caption.component';

describe('CaptionComponent', () => {
  let component: TableCaptionComponent;
  let fixture: ComponentFixture<TableCaptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCaptionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TableCaptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
