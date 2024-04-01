import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import events from './events';

export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="events" {...events.events} />
  </Admin>
);
