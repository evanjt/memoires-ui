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

const ImageTitle = ({ record }) => {
    return <span>Image {record ? `"${record.title}"` : ''}</span>;
};

export const ImageList = (props) => {
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

export const ImageEdit = props => (
    <Edit title={<ImageTitle />} {...props}>
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

export const ImageCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceArrayInput source="owner_id" reference="persons">
                <SelectInput optionText={p => `[${p.id}] ${p.first_names} ${p.last_names}`} optionValue="id" initialValue="1"/>
            </ReferenceArrayInput>
            <TextInput source="title" />
            <ReferenceArrayInput source="persons" reference="persons">
                <SelectArrayInput optionText={p => `[${p.id}] ${p.first_names} ${p.last_names}`} optionValue="id"/>
            </ReferenceArrayInput>
            <ImageInput source="pictures" label="Related pictures" accept="image/*">
                <ImageField source="src" title="title" />
            </ImageInput>

            <DateTimeInput source="time_start" />
            <DateTimeInput source="time_end" />
            <BooleanInput source="time_continuous" initialValue={false}/>
            <BooleanInput source="time_confirmed" />
            <TextInput multiline source="description" />
        </SimpleForm>
    </Create>
);
