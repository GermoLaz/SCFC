import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesSelectorsComponent } from './files-selectors.component';

describe('FilesSelectorsComponent', () => {
  let component: FilesSelectorsComponent;
  let fixture: ComponentFixture<FilesSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesSelectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesSelectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
