import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {FC} from 'react'
import { StackParamList } from '../constant/type/navigation';

import Home from '../screen/Home';
import Login from '../screen/Login';
import Registeur from '../screen/Register';

export interface IMainProps{

}



const Stack = createNativeStackNavigator<StackParamList>();

const Main : FC<IMainProps> = ({}) => {
    
    return(
        <>
            <Stack.Navigator initialRouteName='Registeur'>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Registeur' component={Registeur}/>
            </Stack.Navigator>
        </>
        
    )
}

export default Main;