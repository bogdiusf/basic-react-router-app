import { useEffect, useState } from "react";
import axios from 'axios'
import styled from 'styled-components'

const CenteredInfo = styled.div`
    display: grid;
    place-items: center;

`;

export default function User() {

    const [info, setInfo] = useState([])

    const url1 = "https://api.github.com/users/bogdiusf"
    const url2 = "https://api.github.com/users/vladcrishan"

    useEffect(() => {

        const responseOne = axios.get(url1)
        const responseTwo = axios.get(url2);

        axios.all([responseOne, responseTwo]).then(axios.spread((...responses) => {

            const arr = []
            responses.forEach((item) => 
                arr.push({id: item.data.id, fullName: item.data.name, avatarUrl: item.data.avatar_url})
            )
            setInfo(arr)
            // setInfo([{id: responses[0].data.id, fullName: responses[0].data.name, avatarUrl: responses[0].data.avatar_url}])
            // setInfo([...info, {id: responses[1].data.id, fullName: responses[1].data.name, avatarUrl: responses[1].data.avatar_url}])

            // responses.map((item) => (
            //     setInfo(...info, { fullName: item.data.name, avatarUrl: item.data.avatar_url })
            // ))
            // const obj1 = {
            //     fullName: responses[0].data.name,
            //     avatarUrl: responses[0].data.avatar_url
            // }
            // const obj2 = {
            //     fullName: responses[1].data.name,
            //     avatarUrl: responses[1].data.avatar_url
            // }
     



            // const obj1 = {
            //     fullName: responses[0].data.name,
            //     avatarUrl: responses[1].data.avatar_url
            // }
            // const obj2 = {
            //     fullName: responseTwo.data.name,
            //     avatarUrl: responseOne.data.avatar_url
            // }
            // console.log(obj1, obj2)
            // setInfo([...info, obj1, obj2])
        })).catch(err => console.log(err))
        // axios.get("https://api.github.com/users/vladcrishan")
        //     .then(response => {
        //         const obj = {
        //             fullName: response.data.name,
        //             avatarUrl: response.data.avatar_url
        //         }
        //         setInfo([...info, obj])
        //     })
        //     .catch(error => console.log(error))
    })

    return (
        <CenteredInfo>

            { info.map((item) => 
                <div key={item.id}>
                    <h1>{item.fullName}</h1>
                    <img src={item.avatarUrl} alt="profileAvatar"></img>
                </div>
            )}
        </CenteredInfo>
    )
}