export interface Person {
  personId: number;
  name: string;
  phone: string;
}

export interface Marriage {
  marriageId: number;
  male: Person;
  lady: Person;
  location: string;
}

export interface Guestbook {
  name: string;
  belong: string;
  msg: string;
}

export interface Ticket {
  ticketId: number;
  userId: number;
  marriageId: number;
  isUsed: boolean;
}