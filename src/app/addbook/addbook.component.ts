import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Book } from '../models/book';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.scss'],
})
export class AddbookComponent implements OnInit {
  constructor(private heroservice: HeroService, private router: Router) {}

  public image: any = null;
  public busy: boolean = false;

  public postFrom = new FormGroup({
    title: new FormControl('', Validators.required),
    author: new FormControl('', Validators.required),
    cover: new FormControl('', Validators.required),
  });

  public handleInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target.files) {
      this.image = target.files[0];
    }
    console.log(this.image);
  }
  public addbook(formData: Book): void {
    this.busy = true;
    this.heroservice.addBook(formData, this.image).subscribe((res) => {
      this.busy = false;
      console.log(res);
      this.router.navigate(['/']);
    });
  }
  ngOnInit(): void {}
}
