export interface User {
    id?:number;
    role: 'citizen' | 'autority | admin | supplier';
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    profession: string;
    name_organization: string;
    nom_entreprise: string;
    secteur_activite: string;
    profile_pic?: File | string; // Photo de profil, peut être un fichier ou une URL
    is_verified:boolean
    enabled_notifications:boolean
  }
  
