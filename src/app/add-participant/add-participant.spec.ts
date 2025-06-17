import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParticipant } from './add-participant';

describe('AddParticipant', () => {
  let component: AddParticipant;
  let fixture: ComponentFixture<AddParticipant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddParticipant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddParticipant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
