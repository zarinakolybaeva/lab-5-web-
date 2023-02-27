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
  },
  {
    id: 11,
    name: 'iPhone 13 mini 128Gb',
    price: 630,
    description: `The Apple iPhone 13 mini has received a 5.4—inch Super Retina XDR display, which features an incredibly high pixel density - photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display.   Apple has developed a completely new camera layout and deployed the lenses at 45 degrees.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6e/hdf/46392722784286/apple-iphone-13-mini-128gb-cernyj-102298500-1-Container.jpg',
    rating: '4.9',
    likes: 0,
    visibility: true,
    category: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000#!/item'
  },
  {
    id: 12,
    name: 'iPhone 13 mini 256Gb',
    price: 670,
    description: `The Apple iPhone 13 mini has received a 5.4—inch Super Retina XDR display, which features an incredibly high pixel density - photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display.   Apple has developed a completely new camera layout and deployed the lenses at 45 degrees.`,
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h89/h3d/46392728092702/apple-iphone-13-mini-256gb-belyj-102298530-1-Container.jpg',
    rating: '4.4',
    likes: 0,
    visibility: true,
    category: 4,
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-256gb-belyi-102298530/?c=750000000#!/item'
  },
  {
  id: 13,
  name: ' Xiaomi Redmi Note 11S 6',
  price: 200,
  description: `The AMOLED display with a diagonal of 6.43” guarantees a clear image and smooth picture change in dynamic scenes. This model allows you to always stay connected, work with the most modern applications and make colorful detailed ones using a cool camera.`,
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/heb/he7/49414417154078/xiaomi-redmi-note-11s-6-gb-128-gb-seryj-104154272-1.jpg',
  rating: '2.4',
  likes: 0,
  visibility: true,
  category: 3,
  link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11s-6-gb-128-gb-seryi-104154272/?c=750000000#!/item'
},
{
  id: 13,
  name: 'Xiaomi Redmi 9A ',
  price: 70,
  description: `Xiaomi Red 9A is a version of a budget smartphone, the main features of which are a large screen with a diagonal of 6.53" and a capacious 5000 mAh battery. The main and front-facing AI cameras (13 MP and 5 MP, respectively) allow you to easily take excellent high-quality photos. Big screen. `,
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/hd8/31501177618462/xiaomi-redmi-9a-2-32gb-seryj-100399600-1-Container.jpg',
  rating: '2.0',
  likes: 0,
  visibility: true,
  category: 3,
  link: 'https://kaspi.kz/shop/p/xiaomi-redmi-9a-2-gb-32-gb-seryi-100399600/?c=750000000#!/item'
},
{
  id: 14,
  name: 'Xiaomi Redmi Note 10 Pro ',
  price: 110,
  description: `Xiaomi Red 10 pro is a version of a budget smartphone, the main features of which are a large screen with a diagonal of 6.53" and a capacious 5000 mAh battery. The main and front-facing AI cameras (13 MP and 5 MP, respectively) allow you to easily take excellent high-quality photos. Big screen. `,
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd4/hf5/64482875047966/xiaomi-redmi-note-10-pro-8-gb-128-gb-sinii-107220924-1.jpg',
  rating: '2.2',
  likes: 0,
  visibility: true,
  category: 3,
  link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-sinii-107220924/?c=750000000#!/item'
},
{
  id: 15,
  name: 'Xiaomi Redmi Note 10 Pro ',
  price: 120,
  description: `The new design, flat frames, simple and elegant lines combined with soft shades and a smooth matte finish will become the brightest accessory for any of your looks. Thanks to three updated cameras with a resolution of up to 108 MP, you will learn that there are several ways to capture the world. 108 MP wide-angle camera, ultra-wide-angle camera and macro camera meet your needs in all conditions. Provides richer colors and higher contrast without distortion of real colors. `,
  image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h02/61684710604830/xiaomi-12-lite-8-gb-256-gb-cernyj-106053690-1.jpg',
  rating: '2.1',
  likes: 0,
  visibility: true,
  category: 3,
  link: 'https://kaspi.kz/shop/p/xiaomi-12-lite-8-gb-256-gb-chernyi-106053690/?c=750000000#!/item'
},
{
id: 16,
name: 'iPhone 14 Pro Max ',
price: 700,
description: `The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.69 inches diagonally (actual viewable area is less). Both models: Dynamic Island. Always-On display. `,
image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h02/61684710604830/xiaomi-12-lite-8-gb-256-gb-cernyj-106053690-1.jpg',
rating: '5.0',
likes: 0,
visibility: true,
category: 1,
link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
},
{
id: 16,
name: 'iPhone 14 Pro Max ',
price: 700,
description: `The iPhone 14 Pro Max display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.69 inches diagonally (actual viewable area is less). Both models: Dynamic Island. Always-On display. `,
image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha3/h02/61684710604830/xiaomi-12-lite-8-gb-256-gb-cernyj-106053690-1.jpg',
rating: '5.0',
likes: 0,
visibility: true,
category: 1,
link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000#!/item'
},
{
id: 17,
name: 'Apple iPhone 11 mini ',
price: 300,
description: `The functional and stylish Apple iPhone 11 smartphone in a metal case is able to provide not only everyday communication and entertainment, but also productive work. The image on the screen of a smartphone with a diagonal of 6.1 inches has amazing detail and color reproduction. Oleophobic coating eliminates heavy contamination of the screen. The iPhone 11 has a powerful 6-core A13 Bionic processor that performs any tasks quickly and smoothly. `,
image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd7/hf7/32690572328990/apple-iphone-11-64gb-slim-box-cernyj-100692387-1-Container.jpg',
rating: '4.0',
likes: 0,
visibility: true,
category: 4,
link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item'
},
{
id: 18,
name: 'Apple iPhone 13 mini 128Gb ',
price: 320,
description: `The Apple iPhone 13 mini has received a 5.4—inch Super Retina XDR display, which features an incredibly high pixel density - photos, videos and text look strikingly clear. And thanks to the reduced area of the True Depth camera, there is now more space for the image on the display.   Apple has developed a completely new camera layout and deployed the lenses at 45 degrees. `,
image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hec/h2f/46392721997854/apple-iphone-13-mini-128gb-sinij-102298481-1-Container.jpg',
rating: '3.8',
likes: 0,
visibility: true,
category: 4,
link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-sinii-102298481/?c=750000000#!/item'
},
{
id: 19,
name: 'Samsung Galaxy A03 Core 2 ',
price: 30,
description: `More display, more features. Push the boundaries of what's available with a 6.5-inch V-neck screen. Thanks to HD+ technology, the Galaxy A03 Core display shows a bright, clear and clean picture. Attractive and ergonomic design. Galaxy A03 Core combines classic style and soft tactile sensations. Improved ergonomics provides a comfortable grip and easy navigation over the entire surface of the display.`,
image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/hec/47719147864094/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
rating: '1.5',
likes: 0,
visibility: true,
category: 2,
link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item'
},

];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/