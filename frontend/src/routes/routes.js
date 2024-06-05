export const Router = [
    {
        path: "/admin",
        element: <>Admin Layout</>,
        children: [
            { path: "/dashboard", element: <>Dashboard page</> },
            { path: "/employee", element: <>Employee page</> },
            { path: "/department", element: <>Department page</> },
            { path: "/attendance", element: <>Attendance page</> }
        ]
    }
]