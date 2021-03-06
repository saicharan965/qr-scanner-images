import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCodeComponent } from './image-code.component';

describe('ImageCodeComponent', () => {
  let component: ImageCodeComponent;
  let fixture: ComponentFixture<ImageCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
