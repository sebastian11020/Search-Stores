interface MenuOption {
    id: string;
    label: string;
    link: string;
}

const menuOptionsByRole: Record<string, MenuOption[]> = {
    SuperAdmin: [
        { id: "dashboard", label: "Dashboard", link: "/admin/dashboard" },
        { id: "users", label: "Usuarios", link: "/admin/users" },
        { id: "settings", label: "Configuración", link: "/admin/settings" },
    ],
    user: [
        { id: "profile", label: "Perfil", link: "/user/profile" },
        { id: "orders", label: "Mis Pedidos", link: "/user/orders" },
    ],
    guest: [
        { id: "home", label: "Inicio", link: "/" },
        { id: "login", label: "Iniciar Sesión", link: "/login" },
    ],
};

export { menuOptionsByRole };
