import {
    List,
    Datagrid,
    TextField,
    usePermissions,
    TopToolbar,
    CreateButton,
    ExportButton,
    DateField,
    BooleanField,
} from "react-admin";
import Brightness1TwoToneIcon from '@mui/icons-material/Brightness1TwoTone';
const SensorListActions = () => {
    const { permissions } = usePermissions();
    return (
        <TopToolbar>
            {permissions === 'admin' && <><CreateButton /></>}
            <ExportButton />
        </TopToolbar>
    );
}


const SensorList = () => {
    const { permissions } = usePermissions();

    // Set to green icon
    const TrueIcon = () => <Brightness1TwoToneIcon color="success" />;
    // Set to red icon
    const FalseIcon = () => <Brightness1TwoToneIcon color="error" />; TrueIcon

    return (
        <List disableSyncWithLocation
            actions={<SensorListActions />}
            perPage={25}
        >
            <Datagrid rowClick="show">
                <TextField source="title" />
                <DateField source="time_start" />
                <DateField source="time_end" />
                <TextField source="description" />
                <BooleanField source="time_continuous" />
                <BooleanField source="time_confirmed" />
            </Datagrid>
        </List >

    )
};

export default SensorList;
