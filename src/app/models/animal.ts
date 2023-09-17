export interface Animal {
  id: number;
  type: 'dog' | 'cat';
  age: number;
  sex: 'girl' | 'boy';
  breed: string;
  location: string;
  sterilized: boolean;
  vaccinated: boolean;
  healthy: boolean;
  name: string;
  coverPhotoUrl: string;
  isNew?: boolean;
  isReserved?:boolean;
expires?: boolean;

}
