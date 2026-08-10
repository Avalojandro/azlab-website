export interface DeliveryDistrict {
  id: string;
  jurisdiccion: string;
  distrito: string;
  approxTimeMin: number;
  fee: number;
  freeThreshold?: number; // Minimum subtotal for free delivery (e.g. 35 for Santa Ana Centro)
}

export const JURISDICCIONES = [
  "Santa Ana Centro",
  "Santa Ana Norte",
  "Santa Ana Oeste",
  "Santa Ana Este",
  "Otros Departamentos de Occidente",
] as const;

export const DELIVERY_LOCATIONS: DeliveryDistrict[] = [
  // Santa Ana Centro (Servicio gratis desde $35.00)
  {
    id: "sa-centro-santa-ana-centro",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Santa Ana Centro",
    approxTimeMin: 10,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-el-ivu",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Col. El Ivu",
    approxTimeMin: 15,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-el-trebol",
    jurisdiccion: "Santa Ana Centro",
    distrito: "El Trebol",
    approxTimeMin: 15,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-san-miguelito",
    jurisdiccion: "Santa Ana Centro",
    distrito: "San Miguelito",
    approxTimeMin: 10,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-el-palmar",
    jurisdiccion: "Santa Ana Centro",
    distrito: "El Palmar",
    approxTimeMin: 10,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-el-colon",
    jurisdiccion: "Santa Ana Centro",
    distrito: "El Colón",
    approxTimeMin: 10,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-jardines-tecana",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Jardines de Tecana",
    approxTimeMin: 15,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-lamatepec",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Lamatepec",
    approxTimeMin: 15,
    fee: 2.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-cutumay-camones",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Cutumay Camones",
    approxTimeMin: 30,
    fee: 3.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-santa-leonor",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Santa Leonor",
    approxTimeMin: 15,
    fee: 3.0,
    freeThreshold: 35.0,
  },
  {
    id: "sa-centro-zona-calle-vieja",
    jurisdiccion: "Santa Ana Centro",
    distrito: "Zona Calle Vieja",
    approxTimeMin: 30,
    fee: 3.0,
    freeThreshold: 35.0,
  },

  // Santa Ana Norte (No Aplica Servicio Gratis)
  {
    id: "sa-norte-santa-ana-norte",
    jurisdiccion: "Santa Ana Norte",
    distrito: "Santa Ana Norte",
    approxTimeMin: 15,
    fee: 3.5,
  },
  {
    id: "sa-norte-masahuat",
    jurisdiccion: "Santa Ana Norte",
    distrito: "Masahuat",
    approxTimeMin: 60,
    fee: 15.0,
  },
  {
    id: "sa-norte-metapan",
    jurisdiccion: "Santa Ana Norte",
    distrito: "Metapán",
    approxTimeMin: 60,
    fee: 15.0,
  },
  {
    id: "sa-norte-santa-rosa",
    jurisdiccion: "Santa Ana Norte",
    distrito: "Santa Rosa Guachipilín",
    approxTimeMin: 85,
    fee: 15.0,
  },
  {
    id: "sa-norte-texistepeque",
    jurisdiccion: "Santa Ana Norte",
    distrito: "Texistepeque",
    approxTimeMin: 30,
    fee: 8.0,
  },

  // Santa Ana Oeste (No Aplica Servicio Gratis)
  {
    id: "sa-oeste-candelaria",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "Candelaria de La Frontera",
    approxTimeMin: 35,
    fee: 5.0,
  },
  {
    id: "sa-oeste-chalchuapa",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "Chalchuapa",
    approxTimeMin: 25,
    fee: 3.5,
  },
  {
    id: "sa-oeste-el-porvenir",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "El Porvenir",
    approxTimeMin: 25,
    fee: 3.5,
  },
  {
    id: "sa-oeste-san-antonio-pajonal",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "San Antonio Pajonal",
    approxTimeMin: 70,
    fee: 10.0,
  },
  {
    id: "sa-oeste-san-sebastian-salitrillo",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "San Sebastián Salitrillo",
    approxTimeMin: 30,
    fee: 5.0,
  },
  {
    id: "sa-oeste-santiago-la-frontera",
    jurisdiccion: "Santa Ana Oeste",
    distrito: "Santiago de La Frontera",
    approxTimeMin: 60,
    fee: 10.0,
  },

  // Santa Ana Este (No Aplica Servicio Gratis)
  {
    id: "sa-este-coatepeque",
    jurisdiccion: "Santa Ana Este",
    distrito: "Coatepeque",
    approxTimeMin: 50,
    fee: 6.0,
  },
  {
    id: "sa-este-el-congo",
    jurisdiccion: "Santa Ana Este",
    distrito: "El Congo",
    approxTimeMin: 30,
    fee: 5.0,
  },

  // Otros Departamentos de Occidente (No Aplica Servicio Gratis)
  {
    id: "occidente-ahuachapan-centro",
    jurisdiccion: "Otros Departamentos de Occidente",
    distrito: "Ahuachapan Centro",
    approxTimeMin: 65,
    fee: 10.0,
  },
  {
    id: "occidente-sonsonate-centro",
    jurisdiccion: "Otros Departamentos de Occidente",
    distrito: "Sonsonate Centro",
    approxTimeMin: 75,
    fee: 15.0,
  },
];

export function getDistrictById(id: string): DeliveryDistrict {
  return (
    DELIVERY_LOCATIONS.find((loc) => loc.id === id) || DELIVERY_LOCATIONS[0]
  );
}

export function calculateDeliveryFee(
  district: DeliveryDistrict,
  subtotal: number
) {
  if (district.freeThreshold && subtotal >= district.freeThreshold) {
    return {
      fee: 0,
      isFree: true,
      baseFee: district.fee,
      remainingForFree: 0,
    };
  }

  const remainingForFree = district.freeThreshold
    ? district.freeThreshold - subtotal
    : undefined;

  return {
    fee: district.fee,
    isFree: false,
    baseFee: district.fee,
    remainingForFree: remainingForFree && remainingForFree > 0 ? remainingForFree : 0,
  };
}
