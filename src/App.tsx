import { useState, useRef, useEffect } from 'react';
import {
    Admin,
    Resource,
    AuthProvider,
    DataProvider,
} from 'react-admin';
import { Route } from 'react-router-dom';
import simpleRestProvider from './dataProvider/index'
import Keycloak, {
    KeycloakTokenParsed,
    KeycloakInitOptions,
} from 'keycloak-js';
import { httpClient } from 'ra-keycloak';
import { keycloakAuthProvider } from './authProvider';
import MyLayout from './Layout';
import events from "./events";
import axios from 'axios';
import Dashboard from './Dashboard';


const initOptions: KeycloakInitOptions = { onLoad: 'login-required' };

const getPermissions = (decoded: KeycloakTokenParsed) => {
    const roles = decoded?.realm_access?.roles;
    if (!roles) {
        return false;
    }
    if (roles.includes('admin')) return 'admin';
    if (roles.includes('user')) return 'user';
    return false;
};


export const apiUrl = '/api';

const App = () => {
    const [loading, setLoading] = useState(true);
    const dataProvider = useRef<DataProvider>();
    const [deployment, setDeployment] = useState(undefined);

    return (
        <Admin
            dataProvider={simpleRestProvider(apiUrl)}
            dashboard={Dashboard}
            title="Memoires"
            layout={(props) => <MyLayout {...props} deployment={deployment} />}
        >
            {permissions => (
                <>

                    {permissions ? (
                        <>
                            <Resource name="events" {...events} />
                        </>
                    ) : null}
                </>
            )}
        </Admin>
    );
};
export default App;
