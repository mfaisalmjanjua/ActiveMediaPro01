import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any[] = [
    {
      id: 1,
      left: '10%',
      top: '14%',
      color: 'red',
      name: 'AMNA NASIR',
      handle: '@AMNANASIR4',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 2,
      left: '60%',
      top: '8%',
      color: 'blue',
      name: 'ROMAISA KHAN',
      handle: '@ROMAISA.KHAN._',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 3,
      left: '38%',
      top: '30%',
      color: 'red',
      name: 'DR ZARNAB FATIMA',
      handle: 'ZARNABFATIMAA',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 4,
      left: '13%',
      top: '36%',
      color: 'red',
      name: 'AREEKA',
      handle: 'AREEKA_HAQ',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 5,
      left: '54%',
      top: '42%',
      color: 'red',
      name: 'RABEECA KASHIF',
      handle: 'RABEECAK',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 6,
      left: '30%',
      top: '50%',
      color: 'red',
      name: 'MAAZ SAFDER',
      handle: 'MAAZSAFDER',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 7,
      left: '68%',
      top: '60%',
      color: 'red',
      name: 'LARAIB KHALID',
      handle: 'LARAIBLK',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 8,
      left: '50%',
      top: '69%',
      color: 'red',
      name: 'SHAIZ RAJ',
      handle: 'SHAIZRAJ',
    },
    {
      id: 9,
      left: '10%',
      top: '71%',
      color: 'red',
      name: 'PINKY FRANCIS',
      handle: 'PINKYFRANCIS',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 10,
      left: '16%',
      top: '84%',
      color: 'red',
      name: 'WAJID ALI RAJPOOT',
      handle: 'WAJIDALI703',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
    {
      id: 11,
      left: '71%',
      top: '82%',
      color: 'red',
      name: 'IMAAZ Safdar',
      handle: 'WAJIDALI703',
      video: '182.1M',
      likes: '182.1M',
      posts: '8.7M',
      comments: '182.1M',
      followers: '182.1M',
      share: '182.1M',
      thmb1: '',
      thmb2: '',
      vdo1: '',
      vdo2: '',
    },
  ];

  constructor() {}

  getAll() {
    return of(this.data);
  }

  getProfile(id: number) {
    return of(
      this.data.find((response) => {
        return response.id === 1;
      })
    );
  }
}