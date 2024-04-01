/* eslint react/jsx-key: off */
import {
    Edit,
    SimpleForm,
    TextInput,
    required,
    DateTimeInput,
    NumberInput,
} from 'react-admin';

const SensorEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <DateTimeInput source="time_start" />
                <DateTimeInput source="time_end" />
                <BooleanInput source="time_continuous" />
                <BooleanInput source="time_confirmed" />
                <TextInput source="title" />
                <TextInput multiline source="description" />
            </SimpleForm>
        </Edit>
    )
};

export default SensorEdit;
