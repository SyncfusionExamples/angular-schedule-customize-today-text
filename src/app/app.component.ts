import { Component, ViewChild } from '@angular/core';
import { scheduleData } from './data';
import { extend } from '@syncfusion/ej2-base';
import {
  EventSettingsModel, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService, ScheduleComponent, ActionEventArgs
} from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService]
})
export class AppComponent {
  @ViewChild('scheduleObj', {static: false}) public scheduleObj: ScheduleComponent;
  public data: Object[] = <Object[]>extend([], scheduleData, null, true);
  public selectedDate: Date = new Date(2020, 1, 15);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  public currentView: View = 'Week';

  public onActionComplete(args: ActionEventArgs): void {
    if (args.requestType === "viewNavigate" || args.requestType === "toolBarItemRendered") {
      let text = "Current " + this.scheduleObj.currentView;
      let todayElement = this.scheduleObj.element.querySelector(".e-schedule .e-schedule-toolbar .e-today .e-tbar-btn-text");
      todayElement.innerHTML = text;
    }
  }
}
