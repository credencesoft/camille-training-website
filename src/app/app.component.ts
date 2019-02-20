import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  navLinks = [
    { path: 'home', label: 'Home' },
    { path: 'aboutme', label: 'About Me' },
    { path: 'workout', label: 'Workouts' },
    { path: 'nutrition', label: 'Nutrition' },
    { path: 'packages', label: 'Packages' },
    { path: 'blog', label: 'Blog' },
    { path: 'contact', label: 'Contact' }
    //{ path: 'ptminder', label: 'BookMe' }
  ];
  title = 'camille-training-website';
  goToPtMinder() {
    window.open('https://camillebrosset.ptminder.com/', '_blank');
  }
}
