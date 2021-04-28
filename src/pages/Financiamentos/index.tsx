import React, { useCallback, useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native'
import { parseISO, format } from 'date-fns';
import { 
    Container, 
    Text, 
    Title, 
    Parcela, 
    Vencimento, 
    Valor, 
    Juros, 
    Status, 
    Textt, 
    ContainerButton, 
    ButtonText, 
    Header, 
    Texto,
} from './styles'
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Menu from '../../components/Menu'
import api from '../../services/api'
import { el } from 'date-fns/esm/locale';
interface Item {
    route: {
        params: string;
    };
}

interface Parcelas {
    id: string;
    valor: string;
    juros: string;
    vencimento: string;
    status: string;
}

const CreateGrupo: React.FC<Item> = (item) => {
    const [parcelas, setParcelas] = useState<Parcelas[]>([]);

    const { navigate } = useNavigation();

    const navigateProfile = useCallback(() => {
        navigate('Grupos');
    }, [navigate])

    
    
    useEffect(() => {
        const data = item.route.params[0];
        async function loadParcelas() {
            let response = await api.get('parcelas', { params: { grupo_id: data } });
            
            response.data.forEach(element => {
                if (element.status === 'Pago') {
                    element.status = true;
                }
                if (element.status === 'Em aberto') {
                    element.status = false;
                }
            });
            
            
            response.data.forEach(element => {
                const firstDate = parseISO(element.vencimento);
                
                const formattedDate = format(
                    firstDate,
                    "dd/MMMM",
                );
                element.vencimento = formattedDate
            });
            setParcelas(response.data);
        }
        loadParcelas();
    }, []);
    
    
    
    
    function navigateFinanciamentos(item){
        console.log(item, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        navigate('UpdateFinanciamentos', item);
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
                    <Text>Financiamentos</Text>
                </Header>
                <Title>
                    {item.route.params[1]}
                </Title>
                <ScrollView>
                    {parcelas.length > 0 ? parcelas.map(parcela => (
                            <Parcela key={parcela.id}>
                                <Status isPayRead={parcela.status}>
                                    <Textt>a</Textt>
                                </Status>
                                <Vencimento>Vencimento: {parcela.vencimento}</Vencimento>
                                <Valor onPress={navigateFinanciamentos(parcela)}>Valor: R${parcela.valor}</Valor>
                                {/* <Juros>{parcela.juros}</Juros> */}
                            </Parcela>
                        )) : <Texto>Você ainda não tem parcelas nesse Financiamento </Texto>
                        
                    }
                </ScrollView>
            </Container>
        </>


    );
}

export default CreateGrupo;
