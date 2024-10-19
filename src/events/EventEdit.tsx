/* eslint react/jsx-key: off */
import {
    DateTimeInput,
    Edit,
    ReferenceInput,
    SelectInput,
    SimpleForm,
    TextInput,
    required
} from 'react-admin';

const EventEdit = () => {
    return (
        <Edit mutationMode="pessimistic" redirect="show">
            <SimpleForm>
                <TextInput disabled label="Id" source="id" />
                <TextInput source="title" validate={required()} />
                <TextInput source="description" />
                <DateTimeInput source="start_time" />
            </SimpleForm>
        </Edit>
    )
};

export default EventEdit;
