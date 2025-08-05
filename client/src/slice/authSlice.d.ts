export interface User {
    id: string;
    email: string;
    name: string;
    avatar?: string;
}
interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
}
export declare const loginStart: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/loginStart">, loginSuccess: import("@reduxjs/toolkit").ActionCreatorWithPayload<User, "auth/loginSuccess">, loginFailure: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/loginFailure">, logout: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"auth/logout">;
declare const _default: import("redux").Reducer<AuthState>;
export default _default;
