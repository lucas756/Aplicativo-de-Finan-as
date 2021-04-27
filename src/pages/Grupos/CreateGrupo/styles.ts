import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'


export const Container = styled.View`
    flex: 1;
    background-color: #232129;
`;

export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Text = styled.Text`
    color: #fff;
    font-size: 34px;
    padding: 15px;
    font-family: sans-serif;
`;

export const ContainerButton = styled(RectButton)`
    width: 60px;
    height: 20px;
    background: #212329;
    margin-top: 30px;
    margin-bottom: 0px;
    margin-right: 8px;
    margin-left: 8px;
    justify-content: center;
    align-items: center;
`; 


export const ButtonText = styled.Text`
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    
`;