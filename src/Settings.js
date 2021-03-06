import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    background-color: rgba(255,0,0,0.3);
    > * {
        line-height: 30px;
        padding: 0 50px 30px 50px;
    }
    > h1{
        padding-top: 20px;
    }
`;

export default function SettingsPage(){
    return (
        <Wrapper>
            <h1>Lorem ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Wrapper>
    )
}