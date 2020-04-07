export interface UsersDTO {
    id: number;
    name: string;
    username: string;
    email: string;
    address: AddressDTO;
    phone: string;
    website: string;
    company: CompanyDTO;
  }
export interface CompanyDTO {
    name: string;
    catchPhrase: string;
    bs: string;
  }
export interface AddressDTO {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoDTO;
  }
export interface GeoDTO {
    lat: string;
    lng: string;
}
