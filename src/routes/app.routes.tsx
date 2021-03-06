import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Grupos from '../pages/Grupos'
import NewGrupos from '../pages/Grupos/CreateGrupo'
import Financiamentos from '../pages/Financiamentos'
import UpdateFinanciamentos from '../pages/Financiamentos/UpdateFinaciamento'

const App = createStackNavigator();



const AppRoutes: React.FC = () => (
    <App.Navigator 
        screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: '#312e38' },
        }}
    >
        
        <App.Screen name="Grupos" component={Grupos} />
        <App.Screen name="Financiamentos" component={Financiamentos} />
        <App.Screen name="NewGrupos" component={NewGrupos} />
        <App.Screen name="UpdateFinanciamentos" component={UpdateFinanciamentos} />
    </App.Navigator>
)

export default AppRoutes;