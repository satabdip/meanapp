import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
book = {};

  constructor(private route: ActivatedRoute,private postsService: PostsService) { }

  ngOnInit() {
  this.getBookDetail(this.route.snapshot.params['id']);
  }


    getBookDetail(id) {
    this.postsService.showBook(id).then((res) => {
      this.book = res;
      console.log(this.book);
    }, (err) => {
      console.log(err);
    });
  }


}
