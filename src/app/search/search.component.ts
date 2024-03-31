import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query: string = '';
  blogPosts: any[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() { }

  search() {
    this.contentfulService.searchPosts(this.query)
      .then(response => this.blogPosts = response.items);
      console.log(this.blogPosts);
      
  }
}