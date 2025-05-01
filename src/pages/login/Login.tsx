import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';
import Icon from '../../assets/img/IconLogo2.png'

function Login() {
    const navigate = useNavigate();
    const { usuario, handleLogin, isLoading } = useContext(AuthContext);

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);

    useEffect(() => {
        if (usuario.token !== '') {
            navigate('/admin');
        }
    }, [usuario, navigate]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value,
        });
    }

    function login(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        handleLogin(usuarioLogin);
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-black to-zinc-800 animate-gradient">
            <div className="bg-black/70 backdrop-blur-md rounded-xl shadow-xl p-8 w-[95vw] sm:w-[400px] flex flex-col items-center gap-4">
                <div className="w-24 h-24 flex items-center justify-center overflow-hidden rounded-full">
                    <img src={Icon} alt="Logo" className="object-contain w-full h-full" />
                </div>
                <h2 className="text-white text-3xl font-semibold">Entrar</h2>

                <form onSubmit={login} className="w-full flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="usuario" className="text-white">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuário"
                            className="bg-zinc-800 text-white border border-zinc-600 rounded p-2"
                            value={usuarioLogin.usuario}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="senha" className="text-white">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="bg-zinc-800 text-white border border-zinc-600 rounded p-2"
                            value={usuarioLogin.senha}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <button
                        type="submit"
                        className="rounded bg-red-600 hover:bg-red-800 transition-colors duration-200 text-white w-full py-2 flex justify-center items-center"
                    >
                        {isLoading ? (
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            <span>Entrar</span>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
