import React, {useState} from 'react'
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaRegMoon } from "react-icons/fa6";
import { FaUser } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useAppContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

function NavBar() {
    const [t, i18n] = useTranslation();
    document.body.dir = i18n.dir();

    const navigate = useNavigate();

    const { logoutUser, user, darkMode, darkmode } = useAppContext()

    const [showLogout, setShowLogout] = useState(false)

    const UpdateUser = ()=>{
        navigate('/updateuser')
    }
  return (
    <div className={darkmode ? 'nav-bar' : 'nav-bar-dark'}>
        <div className='nav-logo'>
            <FaRegCalendarCheck className="check-note-nav-bar" />
            <p>Your Notes</p>
        </div>
        <div className='nav-user'>
            <button  onClick={()=>{
                i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
            }}>{i18n.language ==='ar' ? 'En' : 'Ar'}</button>
            {darkmode ? <FaRegMoon className='dark-icon' onClick={()=>{
              darkMode()
            }}/> : <FaSun className='dark-icon' onClick={()=>{
              darkMode()
            }}/>}
            
            <button>
            <FaUser className='dark-icon' onClick={() => setShowLogout(!showLogout)}/>

           
            {darkmode ? <div className={showLogout ? `${i18n.language === 'ar' ? 'dropdownAr' : 'dropdown'} show-dropdown` : `${i18n.language === 'ar' ? 'dropdownAr' : 'dropdown'}`}>
                <h4>{t('hi')} {user?.name}</h4>
            <button type='button' className='dropdown-btn' onClick={logoutUser}>
            {t('logout')}
            </button>

            <button type='button' className='dropdown-btn' onClick={UpdateUser}>
              {t('editProfile')}
            </button>

          </div>

          :
          
          
          <div className={showLogout ? `${i18n.language === 'ar' ? 'dropdownAr-dark' : 'dropdown-dark'} show-dropdown-dark` : `${i18n.language === 'ar' ? 'dropdownAr-dark' : 'dropdown-dark'}`}>
                <h4>{t('hi')} {user?.name}</h4>
            <button type='button' className='dropdown-btn-dark' onClick={logoutUser}>
            {t('logout')}
            </button>

            <button type='button' className='dropdown-btn-dark' onClick={UpdateUser}>
              {t('editProfile')}
            </button>

          </div>}
           

            </button>
        </div>
    </div>
  )
}

export default NavBar