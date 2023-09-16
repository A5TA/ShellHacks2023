import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ErrorPage from './components/ErrorPage.tsx'
import {TransactionProvider} from './context/TranscationContext.tsx'
import './index.css'

const routes: string[] = ["Home", "Individuals", "Charities", "AboutUs"]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={routes[0]}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Home",
    element: <App page={routes[0]}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/individuals",
    element: <App page={routes[1]}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/charities",
    element: <App page={routes[2]}/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <App page={routes[3]}/>,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <TransactionProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </TransactionProvider>,
)