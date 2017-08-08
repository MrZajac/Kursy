import { PostService } from '../../services/posts-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public postService: PostService) { }

  public ngOnInit() {
  }

}
