import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports commented out for brevity
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { SatabdiComponent } from './satabdi/satabdi.component';
import { BookComponent } from './book/book.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { PasswordrecoverComponent } from './passwordrecover/passwordrecover.component';

// Define the routes
const ROUTES = [
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'login',
    component: LoginpageComponent },
  {
    path: 'posts',
    component: PostsComponent
  },
    {
    path: 'satabdi',
    component: SatabdiComponent
  },
  {
    path: 'passwordrecover',
    component: PasswordrecoverComponent
  },
  { path: 'books',
   component: BookComponent
    },
    { path: 'book-create',
    component: BookCreateComponent },
  { path: 'book-details/:id',
    component: BookDetailComponent },
  { path: 'login/:id',
    component: LoginpageComponent },
      { path: 'register',
    component: RegisterpageComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SatabdiComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailComponent,
    LoginpageComponent,
    RegisterpageComponent,
    PasswordrecoverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastModule.forRoot(),
     RouterModule.forRoot(ROUTES) // Add routes to the app
  ],

  providers: [PostsService,{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule { }
