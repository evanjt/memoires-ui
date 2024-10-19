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
// import { LocationFieldAreas } from '../maps/Areas';

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
                {/* <FunctionField render={record => `${record.sensors.length}`} label="Sensors" />
                <FunctionField render={record => `${record.plots.length}`} label="Plots" />
                <FunctionField render={record => `${record.soil_profiles.length}`} label="Soil Profiles" />
                <FunctionField render={record => `${record.transects.length}`} label="Transects" />
                <FunctionField render={() => <ColorBox />} label="Project" /> */}
            </Datagrid>
            {/* <LocationFieldAreas /> */}
        </List>
    );
};

export default EventList;
