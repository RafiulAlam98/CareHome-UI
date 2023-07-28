export type IRoomInfo = {
  totalRoom: number;
  roomTypes: string;
};

export type IPerformance = {
  caring: string;
  effective: string;
  responsive: string;
  safe: string;
};
export type ICareHome = {
  title: string;
  location: string;
  owner: string;
  img: string;
  price: string;
  room: IRoomInfo;
  personIncharge: string;
  localAuthority: string;
  admissionRestrictionAge: number;
  performance: IPerformance;
  logo?: string;
  quote?: string;
};
