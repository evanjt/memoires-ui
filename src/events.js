import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    ReferenceManyField,
    ReferenceArrayInput,
    EditButton,
    Edit,
    FormDataConsumer,
    Create,
    SimpleForm,
    SimpleList,
    ImageInput,
    ReferenceInput,
    SelectInput,
    SelectArrayInput,
    TextInput,
    BooleanField,
    BooleanInput,
    DateField,
    DateInput,
    DateTimeInput,
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import ImageField from './ImageField';
import { makeStyles } from '@material-ui/core/styles';


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


export const EventCreate = props => {
    const useImageFieldStyles = makeStyles(theme => ({
        image: { // This will override the style of the <img> inside the <div>
            width: '100',
            height: '100',
        }
    }));
    const imageFieldClasses = useImageFieldStyles();
    return (
    <Create {...props}>
        <SimpleForm>
            <ReferenceArrayInput source="owner_id" reference="persons">
                <SelectInput optionText={p => `[${p.id}] ${p.first_names} ${p.last_names}`} optionValue="id" initialValue={1}/>
            </ReferenceArrayInput>
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="evanphoto" title="title" classes={imageFieldClasses} />
            </ImageInput>
            <FormDataConsumer>
            {({ formData, ...rest }) => (
                <TextInput source="title" initialValue={formData.evanphoto} />
                )}
            </FormDataConsumer>
            <ReferenceArrayInput source="persons" reference="persons">
                <SelectArrayInput optionText={p => `[${p.id}] ${p.first_names} ${p.last_names}`} optionValue="id" multiple={false}/>
            </ReferenceArrayInput>

            <DateTimeInput source="time_start" />
            <DateTimeInput source="time_end" />
            <BooleanInput source="time_continuous" initialValue={false}/>
            <BooleanInput source="time_confirmed" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Create>
    )};
