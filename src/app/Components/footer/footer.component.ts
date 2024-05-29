import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  dropdownOpen: string | null = null;
  isSmallScreen: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isSmallScreen = window.innerWidth <= 767; // Adjust the width as needed
    if (!this.isSmallScreen) {
      this.dropdownOpen = null; // Close dropdowns on larger screens
    }
  }

  toggleDropdown(section: string): void {
    if (this.isSmallScreen) {
      this.dropdownOpen = this.dropdownOpen === section ? null : section;
    }

}
}
