import {
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent implements OnInit, AfterViewInit {
  @ViewChild('videoModal') videoModal: any;
  id: number;
  data: any;
  autoplay = false;
  muted = false;

  constructor(
    private route: ActivatedRoute,
    private srv: DataService,
    private router: Router
  ) {}

  asset(url: string) {
    return `../../assets/${url}`;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchProfile();
    console.log(this.data);
  }

  fetchProfile() {
    this.srv.getProfile(this.id).subscribe((response) => {
      this.data = response;
    });
  }

  openVideoModal() {
    this.videoModal.nativeElement.style.display = 'block';
    this.autoplay = true;
  }

  closeVideoModal() {
    this.videoModal.nativeElement.style.display = 'none';
  }

  ngAfterViewInit(): void {
    // this.autoplay = true;
  }

  back() {
    this.router.navigate(['/']);
  }
}
