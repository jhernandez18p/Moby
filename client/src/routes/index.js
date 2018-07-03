const routes = [
    {
        path: "/",
        exact: true,
        title: () => inicio,
        main: () => Inicio
    },
    {
        path: "/servicios",
        exact: true,
        title: () => servicios,
        main: () => Servicios
    },
    {
        path: "/productos",
        exact: true,
        title: () => productos,
        main: () => Productos
    },
    {
        path: "/blog",
        exact: true,
        title: () => blog,
        main: () => Blog
    },
    {
        path: "/contacto",
        title: () => contacto,
        main: () => Contacto
    }
];