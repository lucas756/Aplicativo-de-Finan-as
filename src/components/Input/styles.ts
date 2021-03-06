import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather'

interface ContainerProps {
   isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
   width: 100%;
   height: 60px;
   padding: 0 16px;
   background: #232129;
   border-radius: 10px;
   border-width: 2px;
   border-color: #232129;
   margin-bottom: 8px;
   flex-direction: row;
   align-items: center;

   ${(props) => 
      props.isErrored && css`
         border-color: #c53030;
      `}
`; 


export const TextInput = styled.TextInput`
   flex: 1;
   color: #fff;
   font-size: 16px;
   font-family: sans-serif;
`;

export const Icon = styled(FeatherIcon)`
   margin-right: 16px;
`;