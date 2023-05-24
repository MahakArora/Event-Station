import { Outlet } from "react-router";

import EventsNavigation from "../components/EventsNavigation";
const EventRoot=()=>{
    return <>
    <EventsNavigation/>
    <Outlet/>
    </>
};

export default EventRoot;