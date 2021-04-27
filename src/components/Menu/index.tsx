import React, { useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth } from '../../hooks/auth'
import Icon from   'react-native-vector-icons/Feather';
import { ContainerButton, ButtonText, TextName, View, TextB, Text } from './styles'
import { useNavigation } from '@react-navigation/native';





const Menu: React.FC = () => {
    const { signOut, user } = useAuth();
    const { navigate } = useNavigation();
    return(
        <>
        <View>
            <Text>
                <TextB>Bem Vindo(a)</TextB>
                <TextName>{user.name}</TextName>
            </Text>
            <ContainerButton onPress={signOut} >
                <ButtonText>
                    <Icon name="power" size={24} color="#FFF" />
                </ButtonText> 
            </ContainerButton>
        </View>    
        </>
    );
}

export default Menu;
