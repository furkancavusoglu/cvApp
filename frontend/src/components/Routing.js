import React, { useState, useMemo, createContext } from 'react'
export const pagesMapping = {
    login: "login",
    user: "user",
    admin: "admin"
};

// Routing.js
export const RoutingContext = createContext({ page: pagesMapping.login })
export default function Router({ children }) {
    /* Read the urlPath, e.g. '/about' or '/' */
    let urlPath = window.location.pathname.slice(1).toLowerCase();
    /* Set the default page to Home if not specified otherwise in the URL */
    const [page, setPage] = useState(urlPath || pagesMapping.login);
    const value = useMemo(
        () => ({ page, setPage }),
        [page, setPage]
    );

    return (
        <RoutingContext.Provider value={value}>
            {children}
        </RoutingContext.Provider>
    )
}