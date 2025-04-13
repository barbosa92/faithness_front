"use client";
import { useState } from "react";
import { z } from "zod";

interface User {
    username: string;
    email: string;
    password?: string;
    name?: string;
}

interface UseUserResult {
    login: (user: User) => Promise<void>;
    register: (user: User) => Promise<void>;
    error: Error | null;
    loading: boolean;
}

export const useUser = (): UseUserResult => {
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const login = async (user: User) => {
        try {
            setLoading(true);
            setError(null);
            // Aquí iría tu lógica de inicio de sesión, por ejemplo, una llamada a una API
            // Simulación de una llamada asíncrona exitosa
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("Login successful", user);

            // Aquí podrías guardar el token o la información del usuario en localStorage o cookies
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("An unknown error occurred during login."));
            }

        } finally {
            setLoading(false);
        }
    };

    const register = async (user: User) => {
        try {
            setLoading(true);
            setError(null);
            // Aquí iría tu lógica de registro, por ejemplo, una llamada a una API
            // Simulación de una llamada asíncrona exitosa
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("Registration successful", user);

            // Aquí podrías redireccionar al usuario a la página de inicio de sesión o guardar información
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                setError(new Error("An unknown error occurred during register."));
            }
        } finally {
            setLoading(false);
        }
    };

    return { login, register, error, loading };
};