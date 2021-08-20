export class User {
    id?: any;
    firstName?: string;
    middleName?:string;
    lastName?: string;
    email?: string;
    phoneNumber?: string;
    role?: string;
    roles?: {key:string,name:string};
    address?: string;
    datetime?:string;
    customersId?: string;
    customers?:{id:string,name:string,address:string,website:string};
}
