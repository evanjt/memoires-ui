import {
    List,
    Datagrid,
    TextField,
    usePermissions,
    TopToolbar,
    CreateButton,
    ExportButton,
    useRecordContext,
    FunctionField,
} from "react-admin";

const EventListActions = () => {
    const { permissions } = usePermissions();
    return (
        <TopToolbar>
             <><CreateButton /></>
            <ExportButton />
        </TopToolbar>
    );
}


export const EventList = () => {
    return (
        <List actions={<EventListActions />} storeKey={false}>
            <Datagrid rowClick="show" >
                <TextField source="title" />
                <TextField source="description" />
            </Datagrid>
        </List>
    );
};

export default EventList;
