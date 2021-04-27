import React, { useCallback, useRef } from 'react';
import { Container, Header, ContainerButton, ButtonText, Text } from './styles'
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'; 
import { useNavigation } from '@react-navigation/native';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
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
              console.log('oiiiiiiiiiii')
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
    
              return
            }

            Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque as credenciais',);
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
                                name="email" 
                                icon="mail" 
                                keyboardType="email-address" 
                                autoCorrect={false} 
                                autoCapitalize="none" 
                                placeholder="E-mail" 
                                returnKeyType="next"
                            />
                            <Input 
                                ref={passwordInputRef}
                                name="password" 
                                icon="lock" 
                                placeholder="Senha" 
                                secureTextEntry
                                returnKeyType="send"
                                onSubmitEditing={() => {
                                    formRef.current?.submitForm();
                                }}
                            />
                            <Button onPress={() => {
                                formRef.current?.submitForm();
                            }}>
                                Entrar
                            </Button>
                        </Form>
            </Container>

        </>


    );
}

export default NewGrupos;
