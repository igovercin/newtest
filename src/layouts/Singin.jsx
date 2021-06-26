import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'

export default function Singin({signout}) {
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" 
                src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"/>
                Merhaba
                <Dropdown pointing="top right">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />
                        <Dropdown.Item text="Çıkış yap" icon="signed-out" onClick={signout}/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
