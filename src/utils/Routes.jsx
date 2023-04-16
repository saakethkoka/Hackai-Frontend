import {MainPage} from "../mainPage";
import {Page404} from "../404";
import { Navigate, useRoutes } from 'react-router-dom';
import TestComp from "../components/TestComp";

export const Router = () => {
    //TODO: As more pages are added, these routes will need to be updated. Have Ray Irani do this.
    return useRoutes([
        { path: '/', element: <TestComp /> },
        { path: '/404', element: <Page404 /> },
        { path: '*', element: <Page404/>}
    ]);
}

