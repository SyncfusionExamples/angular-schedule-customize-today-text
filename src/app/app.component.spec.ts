import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ScheduleModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
('my-app app is running!');
  });
});
