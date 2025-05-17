import cka from '../app/assets/svg/certificates/cka-certified-kubernetes-administrator.png';
import terraformAssociate from '../app/assets/svg/certificates/hashicorp-certified-terraform-associate-003.png';

export const certificateImage = (certificate) => {
  const certificatelID = certificate.toLowerCase();
  switch (certificatelID) {
    case 'cka':
      return cka;
    case 'terraform-associate':
      return terraformAssociate;
    default:
      break;
  }
}
