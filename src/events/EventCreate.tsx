/* eslint react/jsx-key: off */
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
    DateInput,
    TimeInput,
    DateTimeInput,
} from 'react-admin';
import { useState } from 'react';
// import { LocationFieldAreasCreate } from '../maps/Areas';

const EventCreate = () => {

    return (
        <Create redirect="show">
            <SimpleForm  >
                <TextField source="id" />
                <TextInput source="title" validate={[required()]} />
                <TextInput source="description" />
                <DateTimeInput source="start_time" />
                {/* <DateInput source="end_time" /> */}
                {/* <TextInput source="owner_id" defaultValue={1}/> */}
                {/* <ReferenceInput
                    source="project_id"
                    reference="projects"
                    sort={{ field: 'name', order: 'ASC' }}
                >
                    <SelectInput
                        label="Associated project"
                        source="projects_id"
                        optionText={(record) => `${record.name}`}
                        validate={required()}
                    />
                </ReferenceInput> */}
            </SimpleForm>
        </Create >

    )
};

export default EventCreate;
