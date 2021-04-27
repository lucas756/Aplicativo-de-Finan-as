import React, { useCallback, useState, useEffect } from 'react';
import { ScrollView } from 'react-native'
import { Container, Text, Grupo, TitleGrupo, NewGrupo, ContainerButton, ButtonText, Texto } from './styles'
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/Menu'
import api from '../../services/api';
import Icon from   'react-native-vector-icons/Feather';

interface Grupos{
    id: string;
    name: string;
}

const Grupos: React.FC = () => {
    const [grupos, setGrupos] = useState<Grupos[]>([]);
    const { navigate } = useNavigation();

    const navigateProfile = useCallback((item) => {
        navigate('Financiamentos', item);
    }, [navigate])
    const navigateNewGrupo = useCallback((item) => {
        navigate('NewGrupos', item);
    }, [navigate])

    useEffect(() => {
        async function loadGrupos() {
          const response = await api.get("grupo");
          console.log(response.data);
          setGrupos(response.data);
        }
        loadGrupos();
      }, []);

    return (
        <>
            <Menu />
            <Container>
                <NewGrupo>
                    <Text>Grupos</Text>
                    <ContainerButton>
                        <ButtonText onPress={navigateNewGrupo}>
                            <Icon name="plus-square" size={34} color="#FFF" />
                        </ButtonText>
                    </ContainerButton>
                </NewGrupo>
                <ScrollView>
                    {grupos.length > 0 ? grupos.map(grupo => (
                            <Grupo key={grupo.id}>
                                <TitleGrupo onPress={() => navigateProfile([grupo.id, grupo.name])}>{grupo.name}</TitleGrupo>
                            </Grupo>
                        )) : <Texto>Você ainda não criou grupos :(</Texto>
                    }
                    
                </ScrollView>
            </Container>
        </>


    );
}

export default Grupos;
