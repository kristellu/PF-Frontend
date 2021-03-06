import { DataComponent } from './data-component.model';
import { ContactInformation } from './contact-information.model';

export interface Mentor extends DataComponent {
  id: number;
  name: string;
  role: string;
  info: string;
  contact_information: ContactInformation;
  image_url: string;
  created_at: Date;
  updated_at: Date;
}
