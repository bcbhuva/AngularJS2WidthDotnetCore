import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DxTextBoxModule } from 'devextreme-angular';

@NgModule({
    imports: [
        BrowserModule,
        DxTextBoxModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }