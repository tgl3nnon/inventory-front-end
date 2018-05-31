import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteBeerComponent } from './delete-beer.component';

describe('DeleteBeerComponent', () => {
  let component: DeleteBeerComponent;
  let fixture: ComponentFixture<DeleteBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
