import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { NewServerComponent } from './new-server/new-server.component';
import { ServerListComponent } from './server-list/server-list.component';
import { BasicHighlightDirective } from './directives/basic-highlight.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ServerService } from './services/server-service';

@NgModule({
  declarations: [
    AppComponent,
    NewServerComponent,
    ServerListComponent,
    BasicHighlightDirective,
    HoverHighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
