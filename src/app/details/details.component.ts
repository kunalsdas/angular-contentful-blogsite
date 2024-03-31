import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entry } from 'contentful';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  blogPost$: Observable<any> | undefined;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contentfulService: ContentfulService  ) { }

  ngOnInit():void {
   this.route.params.subscribe(
    params =>  {
      const id = params['id'];
  this.blogPost$ = this.contentfulService.getPost(id);
    }
   );


  }

  goToList() {
    this.router.navigate(['/blogPosts']);
  }

}