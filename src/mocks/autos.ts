import { CarsResponse } from '../router/car'

const getCarsMock: CarsResponse = {
  autos: [
    {
      id: 1,
      marca: 'BMW',
      modelo: 'M Roadster',
      anio: 2008,
      patente: '1GD422CGXEF579840',
      imagen: 'http://dummyimage.com/174x100.png/ff4444/ffffff'
    },
    {
      id: 2,
      marca: 'Chevrolet',
      modelo: 'Suburban 2500',
      anio: 1996,
      patente: '1FTEW1C84AF792709',
      imagen: 'http://dummyimage.com/167x100.png/dddddd/000000'
    },
    {
      id: 3,
      marca: 'GMC',
      modelo: 'Yukon XL 2500',
      anio: 2007,
      patente: 'WAU2GAFC1DN452783',
      imagen: 'http://dummyimage.com/205x100.png/5fa2dd/ffffff'
    },
    {
      id: 4,
      marca: 'GMC',
      modelo: 'Sonoma Club Coupe',
      anio: 1997,
      patente: '3A4GY5F91AT017740',
      imagen: 'http://dummyimage.com/232x100.png/dddddd/000000'
    },
    {
      id: 5,
      marca: 'Chevrolet',
      modelo: 'Silverado 2500',
      anio: 2004,
      patente: '4T1BD1FK5EU490989',
      imagen: 'http://dummyimage.com/118x100.png/5fa2dd/ffffff'
    },
    {
      id: 6,
      marca: 'Chevrolet',
      modelo: '3500',
      anio: 1993,
      patente: '1G6DJ8E38D0573589',
      imagen: 'http://dummyimage.com/148x100.png/dddddd/000000'
    },
    {
      id: 7,
      marca: 'Nissan',
      modelo: 'Armada',
      anio: 2008,
      patente: '3N1CE2CP5EL159029',
      imagen: 'http://dummyimage.com/117x100.png/5fa2dd/ffffff'
    },
    {
      id: 8,
      marca: 'Cadillac',
      modelo: 'DeVille',
      anio: 2005,
      patente: 'JN8AF5MR7FT450216',
      imagen: 'http://dummyimage.com/150x100.png/5fa2dd/ffffff'
    },
    {
      id: 9,
      marca: 'Honda',
      modelo: 'Accord',
      anio: 2012,
      patente: '1HGCR6F36FA384233',
      imagen: 'http://dummyimage.com/100x100.png/ff4444/ffffff'
    },
    {
      id: 10,
      marca: 'Chevrolet',
      modelo: '1500',
      anio: 1994,
      patente: 'W04GY5GV2B1167702',
      imagen: 'http://dummyimage.com/176x100.png/ff4444/ffffff'
    }
  ]
}

const getAutos = async () => {
  return await Promise.resolve(getCarsMock)
}

export default getAutos
