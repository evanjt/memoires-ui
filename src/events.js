import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    SimpleList,
    ReferenceInput,
    SelectInput,
    TextInput,
    BooleanField,
    BooleanInput,
    DateField,
    DateInput,
    DateTimeInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';

const EventTitle = ({ record }) => {
    return <span>Event {record ? `"${record.title}"` : ''}</span>;
};

export const EventList = (props) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.description}
                    secondaryText={record => `${record.description}`}
                    tertiaryText={record => new Date(record.time_start).toLocaleDateString()}
                />
            ) : (
                <Datagrid>
            <ReferenceField source="owner_id" reference="persons">
                <TextField source="first_names" />
            </ReferenceField>
            <TextField source="title" />
            <DateField source="time_start" />
            <DateField source="time_end" />
            <EditButton />
                </Datagrid>
            )}
        </List>
    );
}

export const EventEdit = props => (
    <Edit title={<EventTitle />} {...props}>
        <SimpleForm>
            <DateTimeInput source="time_start" />
            <DateTimeInput source="time_end" />
            <BooleanInput source="time_continuous" />
            <BooleanInput source="time_confirmed" />
            <TextInput source="title" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <DateTimeInput source="time_start" />
            <DateTimeInput source="time_end" />
            <BooleanInput source="time_continuous" />
            <BooleanInput source="time_confirmed" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Create>
);
