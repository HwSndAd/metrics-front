import { createContext, ReactNode, useState } from "react"
import UsuarioLogin from "../models/UsuarioLogin"
import { login } from "../service/service"
import { ToastAlert } from "../util/ToastAlert"


interface AuthContextProps {
    usuario: UsuarioLogin
    handleLogout(): void
    handleLogin(usuario: UsuarioLogin): Promise<void>
    isLoading: boolean
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        token: ""
    })

    const [isLoading, setIsLoading] = useState(false)

    async function handleLogin(usuarioLogin: UsuarioLogin) {
        setIsLoading(true)
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario)
            ToastAlert("Usuário foi autenticado com sucesso!", "sucesso")
        } catch (error) {
            ToastAlert("Os dados do Usuário estão inconsistentes!", "erro")
        }
        setIsLoading(false)
    }

    function handleLogout() {
        setUsuario({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            token: ""
        })
    }

    return (
        <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}