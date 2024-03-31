import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { AllpostComponent } from './allpost/allpost.component';
import { MdToHtmlPipe } from './md-to-html.pipe';
import { ContentfulService } from './contentful.service';
import { TechnologyallpostComponent } from './technologyallpost/technologyallpost.component';
import { ScienceallpostComponent } from './scienceallpost/scienceallpost.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MarkdownModule } from 'ngx-markdown';
import { AibotComponent } from './aibot/aibot.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    AllpostComponent,
    MdToHtmlPipe,
    TechnologyallpostComponent,
    ScienceallpostComponent,
    SearchComponent,
    PrivacyComponent,
    AibotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    MarkdownModule.forRoot(),
    HttpClientModule
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
