// context/SessionContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getCookie } from 'cookies-next';

// Definir tipos
export interface Role {
    idUser: number;
    idRol: number;
    nombre: string;
}

export interface Session {
    idUser: number;
    estado: string;
    fecha_creacion: string;
    nombre: string;
    apellido: string;
    razon_social: string;
    email: string;
    rol: Role[];
    iat: number;
    exp: number;
}

interface SessionContextType {
    session: Session | null;
    updateSession: () => Promise<void>;
}

// Crear el contexto
const SessionContext = createContext<SessionContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useSession = () => {
    const context = useContext(SessionContext);
    if (!context) {
        throw new Error('useSession must be used within a SessionProvider');
    }
    return context;
};

// Proveedor del contexto
export const SessionProvider = ({ children, serverSession }: { children: ReactNode; serverSession?: Session }) => {
    const [session, setSession] = useState<Session | null>(serverSession || null);

    // Actualizar la sesión si se necesita
    const updateSession = async () => {
        const token = getCookie('auth_token') as string | undefined;

        if (token) {
            try {
                const res = await fetch('https://mgscpz76-3000.brs.devtunnels.ms/session', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (res.ok) {
                    const data = await res.json();
                    setSession(data.session);
                }
            } catch (error) {
                console.error('Error fetching session:', error);
            }
        }
    };

    useEffect(() => {
        if (!serverSession) {
            updateSession();
        }
    }, [serverSession]);

    return (
        <SessionContext.Provider value={{ session, updateSession }}>
            {children}
        </SessionContext.Provider>
    );
};
