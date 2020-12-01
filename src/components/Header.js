import { Icon } from '@iconify/react';
import FireHydrant from '@iconify/icons-mdi/fire-hydrant'


const Header = () => {
    return (
        <div className="header">
            <h1><Icon icon={FireHydrant} /> Wildfire Tracker - Powered By NASA <Icon icon={FireHydrant} /></h1>
        </div>
    )
}

export default Header
