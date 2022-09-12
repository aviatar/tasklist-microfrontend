import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoffeeUserTasksModule } from './coffee-user-tasks/coffee-user-tasks.module';
import { ReorderTaskComponent } from './coffee-user-tasks/reorder-task/reorder-task.component';
import { createCustomElement } from '@angular/elements';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoffeeUserTasksModule,
    NgbModule
  ]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
    customElements.define('process-coffee-order-task', createCustomElement(ReorderTaskComponent, {
      injector: this.injector
    }));
  }

}
