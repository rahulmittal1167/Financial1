import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ChartsModule} from 'ng2-charts/ng2-charts';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
//import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';

// import { UpgradeComponent } from './upgrade/upgrade.component';
// import { MapsComponent } from './maps/maps.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GoalsComponent } from './goals/goals.component';
import { GoaldetailsComponent } from './goals/goaldetails/goaldetails.component';
import { DailyExpenseComponent } from './daily-expense/daily-expense.component';
// import { LoginComponent } from './login/login.component';
import { DebtComponent } from './debt/debt.component';
import { DebtdetailComponent } from './debt/debtdetail/debtdetail.component';
import { RestService } from './rest.service';
import { DbOperationsService } from './db-operations.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    //ChartsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,

  ],
  providers: [DbOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
