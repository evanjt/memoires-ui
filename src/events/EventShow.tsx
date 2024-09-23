import {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceManyCount,
    TopToolbar,
    EditButton,
    DeleteButton,
    usePermissions,
    ReferenceField,
    DateField,
    Labeled
} from "react-admin";
import { Grid } from '@mui/material';
import { Box } from '@mui/system';

const EventShowActions = () => {
    const { permissions } = usePermissions();
    return (
        <TopToolbar>
                <>
                    <EditButton />
                    <DeleteButton />
                </>
        </TopToolbar>
    );
}

export const EventShow = () => {
    return (
        <Show actions={<EventShowActions />} >
            <SimpleShowLayout>
                <TextField source="title" />
                <TextField source="description" />

            </SimpleShowLayout>
        </Show>
    );
};

export default EventShow;
