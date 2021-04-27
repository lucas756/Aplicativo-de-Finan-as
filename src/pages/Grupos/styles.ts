import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    background-color: #232129;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 34px;
    padding: 15px;
    font-family: sans-serif;
`;

export const Grupo = styled.View`
    background-color: #322e38;
    width: 90%;
    height: 100px;
    margin-left: 5%;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const TitleGrupo = styled.Text`
    color: #ff9000;
    font-size: 20px;
    padding: 15px;
    font-weight: bold;
    height: 100px;
    text-transform: capitalize;
`;

export const NewGrupo = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`;

export const ContainerButton = styled(RectButton)`
    background: #212329;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`; 


export const ButtonText = styled.Text`
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
`;

export const Texto = styled.Text`
    font-family: sans-serif;
    color: #cdcdcd;
    font-weight: bold;
    font-size: 18px;
    padding: 18%;
    padding-top: 60%;
`;