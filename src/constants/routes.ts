export const routes = [
    {
        path: "/",
        name: "Inicio",
    },
    {
        path: "/productos",
        name: "Productos",
        children: [
            {
                path: "/productos/producto/:categoId",
                name: "producto",
            },
        ],
    },
    {
        path: "/acceder",
        name: "Acceder",
    },
    {
        path: "/*",
        name: "Error"
    },
    {
        path: "/perfil",
        name: "Perfil",
    },
    {
        path: "/carrito",
        name: "Carrito",
    },
    {
        path: "/iniciarSesion",
        name: "IniciarSesion",
    },
] as const;