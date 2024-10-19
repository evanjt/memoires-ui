import { usePermissions } from 'react-admin';
import { Typography } from '@mui/material';

const Dashboard = () => {
    const { permissions } = usePermissions();

    return (
        <><Typography
            variant="h4"
            align='center'
            gutterBottom>
            Welcome to Memoires
        </Typography>
            <Typography
                variant="body"
                align='center'
                gutterBottom>
                Use the menu to the left to navigate the site.
            </Typography>
        </>
    );
};





export default Dashboard;