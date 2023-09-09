import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from '../../components/animal-card/animal-card.component';
import { Animal } from '../../models/animal';

@Component({
  selector: 'app-adopted-catalog',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './adopted-catalog.component.html',
  styleUrls: ['./adopted-catalog.component.scss'],
})
export class AdoptedCatalogComponent {
  animals: Animal[] = [
    {
      id: 1,
      name: 'Lucky',
      age: 1,
      location: 'Tbilisi',
      sex: 'girl',
      healthy: true,
      sterilized: true,
      type: 'dog',
      vaccinated: true,
      coverPhotoUrl:
        'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*',
    },

    {
      id: 2,
      name: 'Boo',
      age: 2,
      location: 'Telavi',
      sex: 'boy',
      healthy: true,
      sterilized: false,
      type: 'dog',
      vaccinated: false,
      coverPhotoUrl:
        'https://ditrrmo.org/wp-content/uploads/2022/12/24-400x500.jpeg',
    },
    {
      id: 3,
      name: 'Max',
      age: 1,
      location: 'Tbilisi',
      sex: 'girl',
      healthy: true,
      sterilized: true,
      type: 'dog',
      vaccinated: true,
      coverPhotoUrl:
        'https://bloximages.newyork1.vip.townnews.com/postandcourier.com/content/tncms/assets/v3/editorial/3/3f/33fcdec2-b2d6-5a62-b98c-9099e2ceb71c/5f3ee112c5d53.image.jpg?resize=400%2C500',
    },

    {
      id: 4,
      name: 'Whiskers',
      age: 2,
      location: 'Batumi',
      sex: 'girl',
      healthy: true,
      sterilized: false,
      type: 'cat',
      vaccinated: false,
      coverPhotoUrl:
        'https://th-thumbnailer.cdn-si-edu.com/bgmkh2ypz03IkiRR50I-UMaqUQc=/1000x750/filters:no_upscale():focal(1061x707:1062x708)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/55/95/55958815-3a8a-4032-ac7a-ff8c8ec8898a/gettyimages-1067956982.jpg',
    },
    {
      id: 5,
      name: 'Lucy',
      age: 1,
      location: 'Kutaisi',
      sex: 'girl',
      healthy: false,
      sterilized: true,
      type: 'cat',
      vaccinated: true,
      coverPhotoUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf9GxkxMLrlbavOC0nQcdGSWQfZxLzZFaSg&usqp=CAU',
    },

    {
      id: 6,
      name: 'Milo',
      age: 2,
      location: 'Telavi',
      sex: 'boy',
      healthy: true,
      sterilized: false,
      type: 'dog',
      vaccinated: true,
      coverPhotoUrl:
        'https://www.hindustantimes.com/ht-img/img/2023/07/10/550x309/labrador-retriever-gfd78b67cf_1280_1677927949246_1688982230758.jpg',
    },
    {
      id: 7,
      name: 'Mia',
      age: 1,
      location: 'Tbilisi',
      sex: 'girl',
      healthy: true,
      sterilized: false,
      type: 'cat',
      vaccinated: true,
      coverPhotoUrl:
        'https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.88557xw:1xh;center,top&resize=1200:*',
    },

    {
      id: 8,
      name: 'Tucker',
      age: 2,
      location: 'Telavi',
      sex: 'boy',
      healthy: true,
      sterilized: false,
      type: 'dog',
      vaccinated: true,
      coverPhotoUrl:
        'https://bloximages.newyork1.vip.townnews.com/wvgazettemail.com/content/tncms/assets/v3/editorial/8/d0/8d072b29-17ab-5b61-a3de-e4720ca82b7f/62d6ec365d2b0.image.jpg?resize=400%2C500',
    },

    {
      id: 9,
      name: 'Felix',
      age: 2,
      location: 'Tbilisi',
      sex: 'boy',
      healthy: true,
      sterilized: true,
      type: 'cat',
      vaccinated: false,
      coverPhotoUrl:
        'https://hips.hearstapps.com/hmg-prod/images/neva-masquerade-royalty-free-image-1674509896.jpg?crop=0.611xw:1.00xh;0.196xw,0&resize=1200:*',
    },
  ];
}
