import mercimek from '../images/mercimek.jpg';
import mantar from '../images/mantar.jpg';
import domates from '../images/domates.jpg';
import çoban from '../images/çoban.jpg';
import mevsim from '../images/mevsim.jpg';
import nar from '../images/nar.jpg';
import kofte from '../images/kofte.jpg';
import tavuk from '../images/tavuk.jpg';
import levrek from '../images/levrek.jpg';
import alinazik from '../images/alinazik.jpg';
import içli from '../images/içli.jpg';
import mücver from '../images/mücver.jpg';
import sigara from '../images/sigara.jpg';
import künefe from '../images/künefe.jpg';
import triliçe from '../images/triliçe.jpg';
import sufle from '../images/sufle.jpg';
import baklava from '../images/baklava.jpg';
import cola from '../images/cola.jpg';
import ayran from '../images/ayran.jpg';
import soda from '../images/soda.jpg';

export const menuItems = [
  {
    id: 'corbalar',
    name: 'Çorbalar',
    items: [
      { id: 1, name: 'Mercimek Çorbası', price: '₺45', image: mercimek },
      { id: 2, name: 'Kremalı Mantar Çorbası', price: '₺55', image: mantar },
      { id: 3, name: 'Domates Çorbası', price: '₺50', image: domates }
    ]
  },
  {
    id: 'salatalar',
    name: 'Salatalar',
    items: [
      { id: 4, name: 'Çoban Salata', price: '₺45', image: çoban },
      { id: 5, name: 'Mevsim Salatası', price: '₺55', image: mevsim },
      { id: 6, name: 'Nar Ekşili Roka Salatası', price: '₺50', image: nar }
    ]
  },
  {
    id: 'ana-yemekler',
    name: 'Ana Yemekler',
    items: [
      { id: 7, name: 'Izgara Köfte', price: '₺120', image: kofte },
      { id: 8, name: 'Fırın Tavuk', price: '₺110', image: tavuk },
      { id: 9, name: 'Levrek Izgara', price: '₺150', image: levrek },
      { id: 10, name: 'Alinazik Kebabı', price: '₺150', image: alinazik }
    ]
  },
  {
    id: 'ara-sıcaklar',
    name: 'Ara Sıcaklar',
    items: [
      { id: 11, name: 'İçli Köfte', price: '₺100', image: içli },
      { id: 12, name: 'Mücver', price: '₺110', image: mücver },
      { id: 13, name: 'Sigara Böreği', price: '₺120', image: sigara }
    ]
  },
  {
    id: 'tatlılar',
    name: 'Tatlılar',
    items: [
      { id: 14, name: 'Künefe', price: '₺120', image: künefe },
      { id: 15, name: 'Triliçe', price: '₺110', image: triliçe },
      { id: 16, name: 'Sufle', price: '₺150', image: sufle },
      { id: 17, name: 'Baklava', price: '₺150', image: baklava }
    ]
  },
  {
    id: 'içecekler',
    name: 'İçecekler',
    items: [
      { id: 18, name: 'Coco Cola', price: '₺100', image: cola },
      { id: 19, name: 'Ayran', price: '₺110', image: ayran },
      { id: 20, name: 'Soda Çeşitleri', price: '₺120', image: soda }
    ]
  }
];