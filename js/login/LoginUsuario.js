let logado = JSON.parse(localStorage.getItem("logado")); //usa jsonparse para pegar valor booleano do item logado ao invés da string
let usuario = localStorage.getItem("nomeUsuario");
let login = new EventEmitter2();

LoginUsuario_render({
    logado:logado,
    usuario: localStorage.getItem("nomeUsuario"),
    onLogin: (nomeUsuario) => {
        logado = true,
        localStorage.setItem("logado", true),
        localStorage.setItem("nomeUsuario", nomeUsuario),
        usuario = nomeUsuario,
            login.emit('login')

    },
    onLogout: () => {
        logado = false,
        localStorage.setItem("logado", false),
        localStorage.removeItem("nomeUsuario"),
        login.emit('logout')
    }
})