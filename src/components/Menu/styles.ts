import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const View = styled.View`
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 90px;
`;

export const ContainerButton = styled(RectButton)`
    width: 60px;
    height: 60px;
    background: #c53030;
    border-radius: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-right: 10px;
    justify-content: center;
    align-items: center;
`; 


export const ButtonText = styled.Text`
    font-family: sans-serif;
    color: #312e38;
    font-weight: bold;
    font-size: 20px;
`;

export const Text = styled.View``;

export const TextName = styled.Text`
    font-family: sans-serif;
    color: #ff9000;
    font-weight: bold;
    font-size: 22px;
    padding: 15px;
    padding-top: 0px;
`;

export const TextB = styled.Text`
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 26px;
    padding-left: 15px;
`;