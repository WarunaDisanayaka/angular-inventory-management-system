import { Component, OnInit } from '@angular/core';
import { RegistrationModule } from '../registration/registration.module';
import { RegistrationService } from '../registration/registration.service';
import { RegisterDetails } from '../models/register-details';

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.css'],
})
export class RegistrationListComponent implements OnInit {
  searchText: string = '';
  showFeaturedOnly: boolean = false;

  registration: RegisterDetails[] = [];

  constructor(private registrationService: RegistrationService) {}

  filteredItems() {
    return this.registration.filter(item =>
      item.itemName.toLowerCase().includes(this.searchText.toLowerCase())
    ) .filter(item => 
      this.showFeaturedOnly ? item.featuredItem === 'Yes' : true // Featured filter
    );;
  }
  ngOnInit(): void {
    this.registration = this.registrationService.getRegistrations();
  }

  deleteRegistration(id: string) {
    const isConfirmed = confirm('Are you sure you want to delete this item?');
    if (isConfirmed) {
      // Proceed with deletion logic
      console.log(`Item with ID ${id} deleted`);
      this.registrationService.deleteRegistration(id);
      // Call your API or remove the item from the list
    }
  }
}
