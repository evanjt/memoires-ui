import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ImageIcon from '@material-ui/icons/Image';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PersonList, PersonEdit, PersonCreate } from './persons';
import { EventList, EventEdit, EventCreate } from './events';
import { ImageList, ImageEdit, ImageCreate } from './images';
import Dashboard from './Dashboard';
import restProvider from 'ra-data-simple-rest';


const App = () => (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:8000/v1')}>
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={PostIcon} />
        <Resource name="persons" list={PersonList} edit={PersonEdit} create={PersonCreate} icon={UserIcon} />
    </Admin>
);

export default App;
