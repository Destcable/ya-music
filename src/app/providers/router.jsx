import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../shared/ui/Layout/Layout";
import MainPage from "../../pages/Main/MainPage";
import RadioPage from "../../pages/Radio/RadioPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { 
                index: true,
                element: <Navigate to="/main" replace />
            },
            {
                path: '/main',
                element: <MainPage />
            },
            { 
                path: '/radio',
                element: <RadioPage />
            }
        ],
    },
]);