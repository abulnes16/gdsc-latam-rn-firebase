/* Redux state types */
export {};
declare global {
  interface GDSC {
    id?: string;
    logo?: string;
    university: string;
    country: string;
  }

  interface User {
    name: string;
    email: string;
    createdAt?: string;
    updatedAt?: string;
  }

  interface LoadingState {
    loading: boolean;
  }

  interface ErrorState {
    error: boolean;
    errorMessage?: string;
    errorTitle?: string;
  }

  interface AuthState extends ErrorState, LoadingState {
    user: User | null;
    currentUserId: string | undefined;
  }

  interface HomeState extends ErrorState, LoadingState {
    gdsc: GDSC[];
  }
}
