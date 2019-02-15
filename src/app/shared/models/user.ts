export interface User {
  uid: string;
  email: string | null;
  photoURL?: string;
  displayName?: string;
  emailVefified?: boolean;
  phoneNumber?: string;
}
