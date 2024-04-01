import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import EventCreate from './EventCreate';
import EventEdit from './EventEdit';
import EventList from './EventList';
import EventShow from './EventShow';

const events = {
    create: EventCreate,
    edit: EventEdit,
    show: EventShow,
    list: EventList,
    options: {
        label: 'Events',
    },
    icon: DeviceThermostatIcon,
};

export default {
    events: events,
};