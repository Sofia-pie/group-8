import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Blog } from '../../core/models/blog';
import { BlogService } from '../../core/services/blog.service';
@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css'],
})
export class BlogItemComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}
  blogs: Blog[];
  blog: Blog;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(switchMap((params) => this.blogService.getBlog(params.get('id')!)))
      .subscribe((blog) => (this.blog = blog));
    this.blogService.getBlogs().subscribe((b) => (this.blogs = b.slice(0, 3)));
  }
}
