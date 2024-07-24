import { createBrowserRouter, Navigate } from "react-router-dom";

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
                path: 'main',
                element: <App />
            },
            { 
                path: 'topic/:topicId/themes',
                element: <SelectThemeContainer />
            },
            { 
                path: 'theme/:themeId/tasks',
                element: <SelectTaskContainer />
            },
            { 
                path: 'theme/:themeId/task/:taskId',
                element: <TaskWrapper />
            },
            {
                path: 'login',
                element: <AuthFormContainer />,
            },
            { 
                path: '/result/theme/:themeId',
                element: <ResultWindowContainer />
            },
            { 
                path: '/profile',
                element: <ProfileContainer />
            }
        ],
    },
]);