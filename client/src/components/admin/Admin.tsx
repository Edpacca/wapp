import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';

export function Admin(props: {isAdmin: boolean }) {
    return(
    <div>
        {
            !props.isAdmin &&
            <AdminLogin/>
        }
        {
            props.isAdmin &&
            <AdminDashboard/>
        }
    </div>
    )
}
