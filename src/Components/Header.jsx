import React from 'react'
import '../CSS/header.css'
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import {Avatar} from '@material-ui/core'
const Header = () => {
    return (
        <div className='header'>
            <img className="header__icon" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt=""/>
            <div className="header__center">
            <input type="text"/>
                <SearchIcon/>
            </div>
            <div className="header__right">
                <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar src="https://scontent.fdel27-1.fna.fbcdn.net/v/t1.0-0/p600x600/109703141_822351778300013_8570862290427723286_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=MpNqNuWkuIMAX8Vyjmf&_nc_oc=AQk71JL9gMOTzX0KcIczyBRs75VjQXKfvd5uTqW7mGo9hOuEAzascDPnWk2k5aq5BKP3wSO6up1JPL93jKzkJ3PL&_nc_ht=scontent.fdel27-1.fna&tp=6&oh=c9d6d20d84e52c1646307c5d91302daa&oe=5FB160F7"/>
            </div>
        </div>
    )
}

export default Header
