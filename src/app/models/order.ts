export interface Order {
    id : number,
    articlesId : number[],
    userId : number,
    state : OrderStatus,
    price: string,
    dateCreated: Date;
}
export enum OrderStatus {
    Placed = "Passée",
    Pending = "En cours",
    Completed = "Terminée"
}