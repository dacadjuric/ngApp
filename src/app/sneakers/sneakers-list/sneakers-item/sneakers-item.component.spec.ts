import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakersItemComponent } from './sneakers-item.component';

describe('SneakersItemComponent', () => {
  let component: SneakersItemComponent;
  let fixture: ComponentFixture<SneakersItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SneakersItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SneakersItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
