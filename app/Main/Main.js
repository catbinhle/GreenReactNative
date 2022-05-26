import React, { useState } from "react"
import Navigator from "../Navigator/Navigator"

const Main = () => {
    const [userInfo, setUserInfo] = useState(null)
    return (
        <Navigator changeProps={(json) => {
            setUserInfo(json?.data)
            console.log('User Info: ', userInfo)
            }}
            userInfo={userInfo}
        />
    )
}

export default Main