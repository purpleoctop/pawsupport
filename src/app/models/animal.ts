export interface Animal {
  id: number,
  type: string,
  age: number,
  sex: string,
  breed: string,
  location: string,
  sterilized: boolean,
  vaccinated: boolean,
  healthy: boolean,
  name: string,
  images: string[],
  isNew?: boolean,
  isReserved?: boolean,
  expires?: boolean,

}
