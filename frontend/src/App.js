
import React from 'react';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';

import HomePage from './pages/home';
import EventPage,{ loader as eventLoader } from './pages/Events';
import EventDetailPage,{loader as eventDetailLoader, action as eventDetailAction} from './pages/EventDetails';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import Root from './pages/Root';
import EventRoot from './pages/EventRoot';
import Error from './pages/Error';
import {action as manipulateEventaction} from './components/EventForm'
import NewsletterPage,{action as newsletterAction} from './pages/Newsletter';

const router=createBrowserRouter([
  { path:'/',element:<Root/>,errorElement:<Error/>,children:[
    { index:true,element:<HomePage/>},
    { path:'events',element:<EventRoot/>,children:[
      { index:true,element:<EventPage />,loader:eventLoader},
      { path: ':eventId',id:'event-detail',loader:eventDetailLoader,children:[
        { index:true,element:<EventDetailPage/> ,action:eventDetailAction},
        { path:'edit',element:<EditEventPage/>,action:manipulateEventaction}
      ]},
      { path:'new',element:<NewEventPage/>,action:manipulateEventaction}
      
    ]},
    { path:'newsletter',element:<NewsletterPage/>,action:newsletterAction}
  
  ],},
  
]);


function App() {
  return <RouterProvider router={router}/>;
}

export default App;
