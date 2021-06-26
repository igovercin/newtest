import React from 'react'
import { Button } from 'semantic-ui-react'

export default function Signout({signin}) {
    return (
        <div>
            <Button primary onClick={signin}>Giriş Yap</Button>
            <Button primary style={{marginleft:'10px'}}>Kayıt Ol</Button>
        </div>
    )
}
