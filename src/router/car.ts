export interface Car {
  id: number
  marca: string
  modelo: string
  anio: number
  patente: string
  imagen: string
}

export interface CarsResponse {
  autos: Car[]
}
