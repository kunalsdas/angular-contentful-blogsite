import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  });

  constructor() { }

  getPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      'fields.select': 'all'
    }, query))
      .then(res => res.items);
  }

  gettechnologyPosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      'fields.select': 'technology'
    }, query))
      .then(res => res.items);
  }

  getsciencePosts(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'blogPost',
      'fields.select': 'science'
    }, query))
      .then(res => res.items);
  }



  getPost(id: string) {
 const promise  = this.client.getEntry(id);
 return from(promise);
  }

  searchPosts(query: string) {
    return this.client.getEntries({
      content_type: 'blogPost',
      query: query
    });
  }

}