import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private srv: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.srv.getAll().subscribe((response) => {
      this.data = response;
    });
  }

  showDetail(id: number):void {
    this.router.navigate(['/detail', id]);
  }
}
