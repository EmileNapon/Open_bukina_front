import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class ConnexionComponent implements OnInit {

  selectedFile: File | null = null;
  registrationForm!:FormGroup

  constructor(private fb: FormBuilder, private userService: AuthService){}

  ngOnInit():void{
   this.initForms()
  }

  initForms():void{
    this.registrationForm = new FormGroup({
    // username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.min(2)] }),
    role:new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    first_name: new FormControl<string | null>(null),
    last_name: new FormControl<string | null>(null),
    email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required,Validators.email] }), 
    password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(4)] }),
    phone_number: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    profession: new FormControl<string | null>(null),
    name_organization :new FormControl<string | null>(null),
    nom_entreprise : new FormControl<string | null>(null),
    secteur_activite: new FormControl<string | null>(null),
    profile_pic: new FormControl< string | null>(null),
    is_verified:new FormControl<boolean>(false),
    enabled_notifications:new FormControl<boolean>(true),
    });

  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit(): void {
    const formData = new FormData();

    formData.append('role', this.registrationForm.value.role);
    formData.append('first_name', this.registrationForm.value.first_name);
    formData.append('last_name', this.registrationForm.value.last_name);
    formData.append('email', this.registrationForm.value.email);
    formData.append('password', this.registrationForm.value.password);
    formData.append('phone_number', this.registrationForm.value.phone_number);
    formData.append('profession', this.registrationForm.value.profession);
    formData.append('name_organization', this.registrationForm.value.name_organization);
    formData.append('nom_entreprise', this.registrationForm.value.nom_entreprise);
    formData.append('secteur_activite', this.registrationForm.value.secteur_activite);
    formData.append('profile_pic', this.registrationForm.value.profile_pic);
    formData.append('enabled_notifications', this.registrationForm.value.enabled_notifications);
    // Ajouter l'image si elle est sélectionnée
    if (this.selectedFile) {
      formData.append('profile_pic', this.selectedFile, this.selectedFile.name);
    }

    formData.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    this.userService.registerUser(formData).subscribe((response) => {
      console.log('Utilisateur enregistré avec succès', response);
    });     
}
}



}
