/* Redux state types */
export {};
declare global {
  interface GDSC {
    logo: string;
    university: string;
    country: string;
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
    user: string | null;
    currentUserId: string | undefined;
  }

  interface HomeState extends ErrorState, LoadingState {
    gdsc: GDSC[];
  }
}
