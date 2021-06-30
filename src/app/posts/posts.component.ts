import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
  posts: any[];


  constructor(private service: PostService){

  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response => this.posts = response as any);
  }

  create(input: HTMLInputElement) {
    let post = { title: input.value };
    this.posts.splice(0, 0, post);

    input.value = '';

    this.service.create(post)
      .subscribe(
        response => {
          post['id'] = response.id;
      },
        (error: Response) =>{
          this.posts.splice(0,1);

          if(error.status === 400){

          }
          else throw error;

      })
  }

  update(post) {
      this.service.update(post)
      .subscribe(
        response => {
          console.log(response);
      })
  }

  delete(post){
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);

      this.service.delete(post.id)
      .subscribe(
        null,
        (error: Response) => {
          this.posts.splice(index, 0, post);

          if(error.status === 404)
            alert('This post has already been deleted');
          else throw error;
      })
  }
}
