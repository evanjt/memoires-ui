/* eslint react/jsx-key: off */

import {
    Create,
    SimpleForm,
    TextField,
    TextInput,
    required,
    DateTimeInput,
    NumberInput,
    BooleanInput,
} from 'react-admin';


const SensorCreate = () => {

    return (
        <Create redirect="list">
            <SimpleForm >
            <DateTimeInput source="time_start" />
            <DateTimeInput source="time_end" />
            <BooleanInput source="time_continuous" initialValue={false}/>
            <BooleanInput source="time_confirmed" />
            <TextInput multiline source="description" />
            </SimpleForm>
        </Create>
    )
};

export default SensorCreate;
