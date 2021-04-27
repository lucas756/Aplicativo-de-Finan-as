import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps {
    isPayRead: boolean;
 }

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

export const Title = styled.Text`
    color: #ff9000;
    font-size: 28px;
    padding:  0 15px;
    text-transform: capitalize;
`;

export const Parcela = styled.View`
    width: 90%;
    margin-left: 5%;
    background-color: #322e38;
    border-radius: 8px;
    height: 120px;
    margin-top: 2px; 
    margin-bottom: 3px;
`;

export const Vencimento = styled.Text`
    color: #ff9000;
    padding: 0 12px;
    font-size: 22px;
`;

export const Valor = styled.Text`
    color: #fff;
    padding: 3px 12px;
    font-size: 20px;
`;

export const Juros = styled.Text`
    color: #fff;
    padding: 0 12px;
    font-size: 20px;
`;

export const Status = styled.View<ContainerProps>`
    background: red;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    position absolute;
    left: 90%;
    top: 30px;

    ${(props) => 
        props.isPayRead && css`
            background: green;
        `}

`;

export const Textt = styled.Text`
    color: red;
    padding: 0 12px;
    font-size: 20px;
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

export const Header = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;

export const Texto = styled.Text`
    font-family: sans-serif;
    color: #cdcdcd;
    font-weight: bold;
    font-size: 18px;
    padding: 15px;
    padding-top: 60;
`;
