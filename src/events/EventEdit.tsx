/* eslint react/jsx-key: off */
import {
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
            </SimpleForm>
        </Edit>
    )
};

export default EventEdit;
