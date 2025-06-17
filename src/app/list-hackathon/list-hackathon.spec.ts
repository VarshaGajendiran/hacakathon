import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHackathon } from './list-hackathon';

describe('ListHackathon', () => {
  let component: ListHackathon;
  let fixture: ComponentFixture<ListHackathon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHackathon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHackathon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
