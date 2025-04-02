import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegistrationService } from '../registration/registration.service';
import { RegisterDetails } from '../models/register-details';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      itemName: ['', Validators.required],
      category: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      supplierName: ['', Validators.required],
      stockStatus: ['', Validators.required],
      featuredItem: ['', Validators.required],
      specialNote: ['']
    });

    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id) {
      let item = this.registrationService.getRegistration(id);
      if (item) {
        this.registerForm.patchValue(item);
      }
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      let item: RegisterDetails = {
        ...this.registerForm.value,
        // Ensure numeric fields are numbers (form returns strings for number inputs)
        quantity: Number(this.registerForm.value.quantity),
        price: Number(this.registerForm.value.price)
      };

      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if (!item.id) {
        alert("ID field is required! Please enter a valid ID.");
        return;
      }

      
      if (id) {
        // Update existing item
        this.registrationService.updateRegistration(id, item);
      } else {
        // Add new item
        this.registrationService.addRegistration(item);
      }

      this.router.navigate(['/list']);
    }
  }
}