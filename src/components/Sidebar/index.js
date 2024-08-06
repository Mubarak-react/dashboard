import Button from '@mui/material/Button';
// import { FaCartArrowDown} from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { IoIosSettings, IoMdLogOut} from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { FaRegChartBar, FaRegCalendarCheck, FaProductHunt} from "react-icons/fa";
import { CiWallet, CiCalendar} from "react-icons/ci";



const Sidebar = () => {

    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)
    }


    return (
        <>
            <div className="sidebar pt-3">
                <ul className='d-flex flex-column'>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                                <span className='icon'><MdHome /></span>
                                <label> Home</label>
                              
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                            <span className='icon'><FaRegChartBar /></span>
                            <label>Products</label>
                           
                        </Button>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                                <span className='icon'><CiCalendar /></span>
                                <label> Calender</label>
                              
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}>
                                <span className='icon'><CiWallet /></span>
                                <label> Wallet</label>
                              
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}>
                                <span className='icon'><FaRegCalendarCheck /></span>
                                <label>Cart</label>
                             
                            </Button>
                        </Link>
                    </li>
                  
                    <li className='logoutBtn w-100 pr-4'>
                        <Link to="/" className='w-100 d-block'>
                            <Button className={`w-100 ${activeTab === 10 ? 'active' : ''}`} onClick={() => isOpenSubmenu(11)} >
                                <span className='icon'><IoMdLogOut /></span>
                                <label>  Logout</label>
                             
                            </Button>
                        </Link>
                    </li>

                </ul>



            </div>
        </>
    )
}

export default Sidebar;