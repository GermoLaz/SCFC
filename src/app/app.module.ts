import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { LoginComponent } from './pages/login/login.component';
import { FilesSelectorsComponent } from './components/files-selectors/files-selectors.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    FileUploadComponent,
    LoginComponent,
    FilesSelectorsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
