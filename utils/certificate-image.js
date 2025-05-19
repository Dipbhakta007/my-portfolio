import cka from '../app/assets/svg/certificates/cka-certified-kubernetes-administrator.png';
import terraformAssociate from '../app/assets/svg/certificates/hashicorp-certified-terraform-associate-003.png';
import awsSaa from '../app/assets/svg/certificates/aws-certified-solutions-architect-associate.png';
import cks from '../app/assets/svg/certificates/cks-certified-kubernetes-security-specialist.png';

export const certificateImage = (certificate) => {
  const certificatelID = certificate.toLowerCase();
  switch (certificatelID) {
    case 'cka':
      return cka;
    case 'terraform-associate':
      return terraformAssociate;
    case 'aws-saa':
      return awsSaa;
    case 'cks':
      return cks;
    default:
      break;
  }
}
