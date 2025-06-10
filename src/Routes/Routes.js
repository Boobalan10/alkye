import React from 'react';
const HomeView = React.lazy(() => import('../Views/HomeView'));
const DetailsView = React.lazy(() => import('../Views/DetailPage'));


const PageRoute = [
    { id: '1', path: '/', name: 'Home View', element: HomeView },
    { id: '2', path: '/details', name: 'Home Details View', element: DetailsView },
]

export default PageRoute;