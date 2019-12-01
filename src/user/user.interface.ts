export interface UserData {
    username: string;
    email: string;
    token: string;
    bio: string;
    image?: string;
    estado: boolean;
    description: string;
  }
  
  export interface UserRO {
    user: UserData;
  }