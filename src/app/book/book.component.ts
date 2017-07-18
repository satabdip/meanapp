import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
   this.getBookList();
  }
getBookList() {
    this.postsService.getAllBooks().then((res) => {
      this.books = res;
    }, (err) => {       
      alert(err);
     // console.log(err);
    });
  }
}
