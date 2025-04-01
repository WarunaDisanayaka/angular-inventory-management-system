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

  registration: RegisterDetails[] = [];

  constructor(private registrationService: RegistrationService) {}

  filteredItems() {
    return this.registration.filter(item =>
      item.itemName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  ngOnInit(): void {
    this.registration = this.registrationService.getRegistrations();
  }

  deleteRegistration(id: string) {
    this.registrationService.deleteRegistration(id);
  }
}
