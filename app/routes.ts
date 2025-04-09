import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
    index("routes/index.tsx"),
    route("about/", "routes/about/index.tsx"),
    layout("routes/auth/layout.tsx", [
        route("login/", "routes/auth/login.tsx"),
        route("register/", "routes/auth/register.tsx"),
    ]),
    ...prefix("contact", [
        index("routes/contact/index.tsx"),
        route("email/", "routes/contact/email.tsx"),
        route("phone/", "routes/contact/phone.tsx"),
    ]),
    ...prefix("teams", [
        index("routes/teams/index.tsx"),
        route(":id", "routes/teams/[id].tsx"),
    ]),
    ...prefix("dashboard", [
        index("routes/dashboard/index.tsx"),
        route("settings", "routes/dashboard/settings.tsx"),
    ]),  
] satisfies RouteConfig;
