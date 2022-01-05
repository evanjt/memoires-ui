import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit } from './users';
import { EventList, EventEdit, EventCreate } from './events';
import Dashboard from './Dashboard';
import restProvider from 'ra-data-simple-rest';


const App = () => (
    <Admin dashboard={Dashboard} dataProvider={restProvider('http://localhost:8000')}>
        <Resource name="events" list={EventList} edit={EventEdit} create={EventCreate} icon={PostIcon} />
        <Resource name="persons" list={UserList} edit={UserEdit} icon={UserIcon} />
    </Admin>
);

export default App;
