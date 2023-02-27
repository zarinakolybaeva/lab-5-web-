export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
  category: number;
  likes: number;
  visibility: boolean;
}

export const products = [
  {
    id: 1,
    name: 'iPhone 12 Pro Max',
    price: 1342,
    description: `Apple iPhone 12 Pro Max with an elegant design without rounded edges in a stainless steel case. The 6.7—inch Super Retina XDR display - the largest among iPhone displays — has the highest resolution and displays almost 3.5 million pixels, demonstrating amazing realism of the image..`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h1a/33281077968926/apple-iphone-12-pro-max-256gb-sinij-100658113-1-Container.jpg',
    rating: '4.2',
    likes: 0,
    visibility: true,
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-pro-max-256gb-sinii-100658113/?c=750000000#!/item',
    category: 1
  },
  {
    id: 2,
    name: 'iPhone 13',
    price: 890,
    description: `The Apple iPhone 13 received a 6.1-inch Super Retina XDR display, which features an incredibly high pixel density — photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h01/h10/46392662491166/apple-iphone-13-128gb-cernyj-102298404-1-Container.jpg',
    rating: '4.1',
    likes: 0,
    visibility: true,
    category: 1,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000#!/item'
  },
  {
    id: 3,
    name: 'Xiaomi Redmi 10C',
    price: 161,
    description: 'Xiaomi Red 10C is equipped with a large display with a diagonal of 6.71 inches with Corning Gorilla Glass, which protects the screen from scratches and damage when falling. Redmi 10C allows you to create professional-level photos in a format for entertainment.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hea/h96/49939925139486/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    rating: '2',
    likes: 0,
    visibility: true,
    category: 3,
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item'
  },
  {
    id: 4,
    name: ' Samsung Galaxy A33',
    price: 290,
    description: `The Galaxy A33 5G smartphone has become thinner and more elegant thanks to a matte finish, high-quality frames and a flawless camera body with Ambient Edge. Thanks to the 6.4-inch Infinity-U screen with a frequency of 90 Hz on the Galaxy A33 5G smartphone, you will be able to see everything that was hidden from your view.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/he7/49894748094494/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg',
    rating: '3.1',
    likes: 2,
    visibility: true,
    category: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item'
  },
  {
    id: 5,
    name: 'Apple iPhone 13 ',
    price: 834,
    description: `The Apple iPhone 13 received a 6.1-inch Super Retina XDR display, which features an incredibly high pixel density — photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display..`,
    image: '/assets/img/5.jpg',
    rating: '4.0',
    likes: 0,
    visibility: true,
    category: 1,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item'
  },
  {
    id: 6,
    name: "Apple iPhone 11 128Gb Slim Box",
    price: 671,
    description: `The functional and stylish Apple iPhone 11 smartphone in a metal case is able to provide not only everyday communication and entertainment, but also productive work. The image on the screen of a smartphone with a diagonal of 6.1 inches has amazing detail and color reproduction.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h79/h01/33208264720414/apple-iphone-11-128gb-slim-box-belyj-100692385-1-Container.jpg',
    rating: '3.5',
    likes: 0,
    visibility: true,
    category: 1,
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-belyi-100692385/?c=750000000#!/item1'
  },
  {
    id: 7,
    name: 'Samsung Galaxy A73',
    price: 534,
    description: 'Galaxy A73 5G - multimedia center you have even more possibilities in your hands. Galaxy A73 5G powered by Snapdragon 778G 5G processor expands multimedia capabilities thanks to the highest level of gaming, professional shooting and advanced artificial intelligence technology to improve performance. Need more memory? The RAM Plus function provides additional virtual RAM',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h53/hc6/50197108097054/samsung-galaxy-a73-5g-8-gb-256-gb-zelenyi-104546061-1.jpg',
    rating: '3.7',
    likes: 0,
    visibility: true,
    category: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-8-gb-256-gb-zelenyi-104546061/?c=750000000#!/item'
  },
  {
    id: 8,
    name: 'Samsung Galaxy S22 Ultra 12',
    price: 1164,
    description: 'Meet the Galaxy S22 Ultra with the power of the Note Its slim aluminum body impresses with its perfect shape. And the exquisite outlines of the rear cameras seem to be buried in its smooth surface. It has never been brighter, appreciate the Dynamic AMOLED 2X display with Vision Booster technology and 1750 thread, thanks to which you will forget about glare.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hda/hb6/48695060529182/samsung-galaxy-s22-ultra-12-256gb-cernyj-podarok-103668309-1.jpg',
    rating: '4.1',
    likes: 0,
    visibility: true,
    category: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-ultra-12-gb-256-gb-chernyi-103668309/?c=750000000#!/item'
  },
  {
    id: 9,
    name: 'Apple iPhone 12 mini',
    price: 657,
    description: `Apple iPhone 12 mini has a new elegant design without rounding the edges. When making the front panel of a smartphone, ceramic nanocrystals are added to the glass matrix, which are stronger than many known metals. Dual ion exchange technology provides excellent protection against cracks, scratches and other minor damages. Frame`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/h20/33277048422430/apple-iphone-12-mini-64gb-cernyj-100657220-1-Container.jpg',
    rating: '4.1',
    likes: 0,
    visibility: true,
    category: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000#!/item'
  },
  {
    id: 10,
    name: 'Samsung Galaxy A73',
    price: 630,
    description: `Galaxy A73 5G - multimedia center you have even more possibilities in your hands. Galaxy A73 5G powered by Snapdragon 778G 5G processor expands multimedia capabilities thanks to the highest level of gaming, professional shooting and advanced artificial intelligence technology to improve performance.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0c/h2c/51531118018590/samsung-galaxy-a73-5g-6-gb-128-gb-zelenyi-104546042-1.jpg',
    rating: '2.9',
    likes: 0,
    visibility: true,
    category: 2,
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a73-5g-6-gb-128-gb-zelenyi-104546042/?c=750000000#!/item'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/