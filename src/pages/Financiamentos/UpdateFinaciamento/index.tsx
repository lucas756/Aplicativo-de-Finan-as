import React, { useCallback, useRef } from 'react';
import { Container, Header, ContainerButton, ButtonText, Text, BottonText, Button } from './styles'
import Input from '../../../components/Input';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'; 
import { useNavigation } from '@react-navigation/native';
import { TextInput, Alert } from 'react-native';
import Icon from   'react-native-vector-icons/Feather';
import Menu from '../../../components/Menu'
import { useAuth } from '../../../hooks/auth';

interface Item {
    route: {
        params: string;
    };
}

const UpdateFinanciamentos: React.FC<Item> = (item) => {
    const navigation = useNavigation();
    const navigateProfile = useCallback(() => {
        navigation.navigate('Financiamentos');
        console.log(item)
    }, [navigate])
    function navigate() { 
        navigation.navigate('SignUp')
    }
    return (
        <>
            <Menu />
                <Container>
                    <Header>
                        <ContainerButton>
                            <ButtonText onPress={navigateProfile}>
                                <Icon name="corner-up-left" size={25} color="#ff9000" />
                            </ButtonText>
                        </ContainerButton>
                        <Text>Update Financiamento</Text>
                    </Header>
                   
                </Container>
        </>


    );
}

export default UpdateFinanciamentos;
