import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { Person } from './person';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CarouselModule, CardModule, TagModule, ButtonModule, FormsModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  
  person : Person[] = [
    { name: 'Julian Jameson', image: '../../../assets/images/user-cover-1.png', profession: 'Frontend',socials:{facebook:'../../../assets/images/facebook.svg',instagram:'',twitter:'' }},
    { name: 'Julian Jameson', image: '../../../assets/images/user-cover-2.png', profession: 'Backend', socials:{facebook:'../../../assets/images/facebook.svg',instagram:'',twitter:'' } },
    { name: 'Julian Jameson', image: '../../../assets/images/user-cover-3.png', profession: 'DevOps',  socials:{facebook:'../../../assets/images/facebook.svg',instagram:'',twitter:'' }},
    { name: 'Julian Jameson', image: '../../../assets/images/user-cover-4.png', profession: 'Manager', socials:{facebook:'../../../assets/images/facebook.svg',instagram:'',twitter:'' } },
  ];

  constructor(){

  }

    

}
