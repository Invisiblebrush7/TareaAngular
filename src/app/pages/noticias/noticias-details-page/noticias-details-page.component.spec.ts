import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDetailsPageComponent } from './noticias-details-page.component';

describe('NoticiasDetailsPageComponent', () => {
  let component: NoticiasDetailsPageComponent;
  let fixture: ComponentFixture<NoticiasDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
