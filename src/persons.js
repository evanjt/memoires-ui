import * as React from "react";
import { List, Create, Datagrid, UrlField, TextField, TextInput, SimpleForm, Edit, DateInput, EmailField, DateField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const PersonList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="first_names" />
            <TextField source="last_names" />
            <DateField source="birth_date" />
        </Datagrid>
    </List>
);

export const PersonEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="first_names" />
            <TextInput source="last_names" />
            <DateInput source="birth_date" />
        </SimpleForm>
    </Edit>
);

export const PersonCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="first_names" />
            <TextInput source="last_names" />
            <DateInput source="birth_date" />
        </SimpleForm>
    </Create>
);
