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



const NewGrupos: React.FC = () => {
    interface SignInFormData{
        email: string,
        password: string,
    }
       
    const navigateProfile = useCallback(() => {
        navigation.navigate('Grupos');
    }, [navigate])

    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);
    const navigation = useNavigation();

    const { signIn, user } = useAuth();
    
   

    interface SignInFormData{
        email: string,
        password: string,
    }
        
    const handleSignIn = useCallback(
        async (data: SignInFormData) => {
          try {
              console.log(data)
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
    
              console.log('oooooooooooo');
              return
            }

            Alert.alert('Erro no cadastro', 'Ocorreu um erro ao cadastrar o grupo, cheque as informações',);
        }
    }, [ signIn ],)

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
                        <Text>Novo Grupo</Text>
                    </Header>
                    <Form onSubmit={handleSignIn} >
                                <Input 
                                    name="name" 
                                    icon="group" 
                                    keyboardType="email-address" 
                                    autoCorrect={false} 
                                    autoCapitalize="none" 
                                    placeholder="Nome do Grupo" 
                                    returnKeyType="next"
                                    />
                                <Button onPress={() => {
                                    formRef.current?.submitForm();
                                }}>
                                    <BottonText>Criar</BottonText>
                                </Button>
                            </Form>
                </Container>
        </>


    );
}

export default NewGrupos;
