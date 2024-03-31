import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Entry } from 'contentful';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-allpost',
  templateUrl: './allpost.component.html',
  styleUrls: ['./allpost.component.css']
})
export class AllpostComponent {

   blogPosts: Entry<any>[] = [];

  constructor(private router: Router, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.contentfulService.getPosts()
    .then(blogPosts => {
       this.blogPosts = blogPosts;
       this.blogPosts.sort((a: Entry<any>, b: Entry<any>) => {
          if (a.fields.numberofpost < b.fields.numberofpost) {
            return -1;
          }
          if (a.fields.numberofpost > b.fields.numberofpost) {
            return 1;
          }
          return 0;
       });
    });
     
  }

  goToDetailsPage(blogPostId: any) {
  const d =  this.router.navigate(['/', blogPostId]);
    console.log(d)
  }

}