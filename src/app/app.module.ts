import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { TaskComponent } from './task_crud/component/task/task.component';
import { BdirectivesComponent } from './bdirectives/bdirectives.component';
import { TodoComponent } from './newtodo/components/todo/todo.component';
import { TodoFormComponent } from './newtodo/components/todo-form/todo-form.component';
import { TodoTotalComponent } from './newtodo/components/todo-total/todo-total.component';
import { TodoDetailComponent } from './newtodo/components/todo-detail/todo-detail.component';
import { TodoListComponent } from './newtodo/components/todo-list/todo-list.component';
import { AttrDirective } from './attr.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TodoService } from './cores/services/todo.service';
import { IndodatePipe } from './indodate.pipe';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { UserService } from './cores/services/user.service';
import { NavComponent } from './shared/components/nav/nav.component';
import { CustomerTableComponent } from './features/components/customers/customer-table/customer-table.component';
import { CustomerChoiceComponent } from './features/components/customers/customer-choice/customer-choice.component';
import { CustomerDetailComponent } from './features/components/customers/customer-detail/customer-detail.component';
import { CustomerListComponent } from './features/components/customers/customer-list/customer-list.component';
import { CustomerSearchComponent } from './features/components/customers/customer-search/customer-search.component';
import { ReservasiCreateComponent } from './features/components/reservasi/reservasi-create/reservasi-create.component';
import { ReservasiChoiceComponent } from './features/components/reservasi/reservasi-choice/reservasi-choice.component';
import { ReservasiListComponent } from './features/components/reservasi/reservasi-list/reservasi-list.component';
import { ReservasiDetailComponent } from './features/components/reservasi/reservasi-detail/reservasi-detail.component';
import { ReservasiSearchComponent } from './features/components/reservasi/reservasi-search/reservasi-search.component';
import { ReservasiSisaComponent } from './features/components/reservasi/reservasi-sisa/reservasi-sisa.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    BdirectivesComponent,
    TodoComponent,
    TodoFormComponent,
    TodoTotalComponent,
    TodoDetailComponent,
    TodoListComponent,
    AttrDirective,
    IndodatePipe,
    NavComponent,
    CustomerTableComponent,
    CustomerChoiceComponent,
    CustomerDetailComponent,
    CustomerListComponent,
    CustomerSearchComponent,
    ReservasiCreateComponent,
    ReservasiChoiceComponent,
    ReservasiListComponent,
    ReservasiDetailComponent,
    ReservasiSearchComponent,
    ReservasiSisaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule, // Tambahkan FormsModule di sini
    NgbTimepickerModule,
  ],
  providers: [provideHttpClient(), TodoService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
