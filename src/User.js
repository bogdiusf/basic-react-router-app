import { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const CenteredInfo = styled.div`
    display: grid;
    place-items: center;

`;

export default function User() {

    const [info, setInfo] = useState(null)

    useEffect(() => {
        axios.get("https://api.github.com/users/bogdiusf")
            .then(response => setInfo(response.data))
            .catch(error => console.log(error))
    })

    const fullName = info ? info.name : '';
    const avatarUrl = info ? info.avatar_url : '';

    return (
        <CenteredInfo>
            <h1>{fullName}</h1>
            <img src={avatarUrl} alt="profileAvatar"></img>
        </CenteredInfo>
    )
}