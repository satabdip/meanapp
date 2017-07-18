import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-satabdi',
  templateUrl: './satabdi.component.html',
  styleUrls: ['./satabdi.component.css']
})
export class SatabdiComponent implements OnInit {
 names: any = [];
  constructor(private postsService: PostsService) { }

  ngOnInit() {
 this.postsService.getName().subscribe(name => {
      this.names = name;
    });

  }

}
