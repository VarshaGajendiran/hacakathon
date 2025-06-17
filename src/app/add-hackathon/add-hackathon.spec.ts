import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHackathon } from './add-hackathon';

describe('AddHackathon', () => {
  let component: AddHackathon;
  let fixture: ComponentFixture<AddHackathon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHackathon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHackathon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
