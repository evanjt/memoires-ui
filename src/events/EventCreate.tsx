import {
    Create,
    SimpleForm,
    TextField,
    TextInput,
    required,
    useCreate,
    Toolbar,
    SaveButton,
    useRedirect,
    ReferenceInput,
    SelectInput,
} from 'react-admin';
import { useState } from 'react';

const EventCreate = () => {

    return (
        <Create redirect="show">
            <SimpleForm  >
                <TextField source="id" />
                <TextInput source="name" validate={[required()]} />
                <TextInput source="description" />
                <TextInput source="owner_id" defaultValue={1}/>
            </SimpleForm>
        </Create >

    )
};

export default EventCreate;
