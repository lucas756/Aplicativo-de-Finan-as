import React, { useCallback, useRef } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { useNavigation } from '@react-navigation/native'
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationsErrors'
import api from '../../services/api';

import {
    Container,
    Title,
    BackToSignIn,
    BackToSignInText
} from './styles';

interface SignInFormData {
    name: string;
    email: string;
    password: string;
}

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const navigation = useNavigation();

    const handleSignUp = useCallback(
        async (data: SignInFormData) => {
          try {
            formRef.current?.setErrors({})
    
            const schema = Yup.object().shape({
                name: Yup.string().required('O nome é obrigatorio'),
                email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().required('Senha obrigatória'),
              salario: Yup.number().required(),
            })
    
            await schema.validate(data, {
              abortEarly: false,
            })
    
            await api.post('/users', data)

            Alert.alert('Cadastro realizado com sucesso', 'Você já pode fazer login na aplicação')

            navigation.goBack()
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err)
              formRef.current?.setErrors(errors)
    
              return
            }

            Alert.alert('Erro na autenticação', 'Ocorreu um erro ao fazer login, cheque as credenciais',);
        }
    }, [ navigation ],)

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
                        <Title>Crie sua Conta</Title>
                        <Form ref={formRef} onSubmit={handleSignUp}>
                            <Input name="name" icon="user" placeholder="Nome" />
                            <Input name="email" icon="mail" placeholder="E-mail" />
                            <Input name="salario" icon="credit-card" placeholder="Salário" />
                            <Input name="password" icon="lock" secureTextEntry placeholder="Senha" />
                            <Button onPress={() => formRef.current?.submitForm()}>
                                Entrar
                            </Button>
                        </Form>
                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <BackToSignIn onPress={() => navigation.goBack()}>
            <Icon name="corner-up-left" size={25} color="#ff9000" />
                <BackToSignInText>
                    Voltar para o login
                </BackToSignInText>
            </BackToSignIn>
        </>
    );
}

export default SignUp;