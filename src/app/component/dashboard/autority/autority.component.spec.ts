import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutorityComponent } from './autority.component';

describe('AutorityComponent', () => {
  let component: AutorityComponent;
  let fixture: ComponentFixture<AutorityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutorityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutorityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
