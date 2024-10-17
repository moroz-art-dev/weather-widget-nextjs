export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface City {
  name: string;
  countryName: string;
  geonameId: number;
}

export interface CityResponse {
  geonameId: number;
  name: string;
  countryName: string;
  lat?: number;
  lng?: number;
}
