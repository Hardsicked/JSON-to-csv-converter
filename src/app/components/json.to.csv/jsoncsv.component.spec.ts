import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonToCsvComponent } from './jsoncsv.component';

describe('Json.To.CsvComponent', () => {
  let component: JsonToCsvComponent;
  let fixture: ComponentFixture<JsonToCsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonToCsvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonToCsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
