import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavComponent } from '@app/standings/shared/components/nav/nav.component';

import { ConstructorsComponent } from './constructors.component';

describe('ConstructorsComponent', () => {
  let component: ConstructorsComponent;
  let fixture: ComponentFixture<ConstructorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConstructorsComponent, NavComponent],
      imports: [HttpClientTestingModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConstructorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
