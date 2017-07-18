import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { PostsService } from '../posts.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

user = {};
login = {};
passwordresponse = {};
  forgotmail: string ;
  constructor(public toastr: ToastsManager, vcr: ViewContainerRef , private route: ActivatedRoute, private router: Router, private postsService: PostsService) {
    this.toastr.setRootViewContainerRef(vcr);
   }

  ngOnInit() {

  }

  loginuser()
  {


this.getUserDetail();

  }
    getUserDetail() {

      this.postsService.showloginUser(this.login).then((res) => {
      this.user = res;
        if ( this.user === null)
        {
          this.toastr.info('<span style="color: red;background: black;">Invalid username or password.</span>', null, {enableHTML: true});
        }else {
        this.toastr.info('<span style="color: green;background: black;top:2%;">Login successful.</span>', null, {enableHTML: true});
        this.router.navigate(['/books']);
      }

    }, (err) => {
      console.log(err);

     // alert(err);
    });
  }
  registertab()
  {
    this.router.navigate(['/register']);
  }

  forgotpassword()
  {

    this.postsService.showmailresponse(this.forgotmail).then((res) => {
      this.passwordresponse = res;
     console.log(this.passwordresponse );

    }, (err) => {
      console.log(err);

      // alert(err);
    });
  }
}
