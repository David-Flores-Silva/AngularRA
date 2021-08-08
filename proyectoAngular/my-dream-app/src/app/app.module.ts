import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserComponent } from './user/user.component';

import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';



const routes: Route[] = [
  {path: "user", component: UserComponent },
  {path: "helloWorld", component: HelloWorldComponent },
  {path: "about", component: AboutComponent },
  {path: "hello", component: HelloComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserComponent,
    AboutComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
