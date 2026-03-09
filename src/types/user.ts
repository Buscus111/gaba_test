export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  age: number;
  gender: string;
  address: {
    city: string;
    country: string;
  };
  company: {
    name: string;
  };
};

export type UsersResponse = {
  users: User[];
  total: number;
  skip: number;
  limit: number;
};
