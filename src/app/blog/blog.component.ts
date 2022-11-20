import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from '../core/models/blog';
import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  p: number = 1;
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blogs) => (this.blogs = blogs));
  }
}
