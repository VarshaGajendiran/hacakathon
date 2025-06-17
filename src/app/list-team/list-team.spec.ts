import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTeam } from './list-team';

describe('ListTeam', () => {
  let component: ListTeam;
  let fixture: ComponentFixture<ListTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
