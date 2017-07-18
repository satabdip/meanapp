import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {
  user = {};
  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
  }

  register()
  {

 this.postsService.registeruser(this.user).then((result) => {
      let id = result['_id'];

     console.log(result);
      this.router.navigate(['/login']);
    }, (err) => {
      console.log(err);
    });

  }
  logintab()
  {
    this.router.navigate(['/login']);
  }
}
