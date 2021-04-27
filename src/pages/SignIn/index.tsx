import React, { useCallback, useRef } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, Alert } from 'react-native';
import Icon from   'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'; 
import api from '../../services/api'
import { useAuth } from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationsErrors'

import { 
    Container,  
    Title, 
    ForgotPassword, 
    ForgotPasswordText, 
    CreateAccountButton, 
    CreateAccountButtonText 
} from './styles';

const SignIn: React.FC = () => {
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
            console.log(data);
            
            formRef.current?.setErrors({})
    
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().required('Senha obrigatória'),
            })
    
            await schema.validate(data, {
              abortEarly: false,
            })
            
            await signIn({
                email: data.email,
                password: data.password,
            })
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err)
                console.log(errors)
              formRef.current?.setErrors(errors)
    
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
            <KeyboardAvoidingView 
                style={{ flex: 1, }}  
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                enabled 
            >
                <ScrollView 
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex: 1 }}
                >
                    <Container>
                        <Title>Faça seu login</Title>
                        <Form ref={formRef} onSubmit={handleSignIn} >
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
                        <ForgotPassword onPress={() => {}}>
                            <ForgotPasswordText>
                                Esqueci minha senha
                            </ForgotPasswordText>
                        </ForgotPassword>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <CreateAccountButton onPress={() => navigate()}>
                <Icon name="log-in" size={20} color="#ff9000" />
                <CreateAccountButtonText>
                    Crie sua Conta 
                </CreateAccountButtonText>
            </CreateAccountButton>
        </>
    );
}

export default SignIn;