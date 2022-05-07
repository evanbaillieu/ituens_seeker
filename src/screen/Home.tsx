import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ILoginScreenNavigationProps, StackParamList } from '../constant/type/navigation';
import { selectUser } from '../helper/selecter/user.selecter';
import { useAppSelector } from '../store';

export interface IHomeProps{

}



type props = StackScreenProps<StackParamList, 'Home'>
type NavigationProps = StackNavigationProp<StackParamList, 'Home'>

const Home : FC<props> = ({route, navigation}: props) => {
 
   const Navigation = useNavigation<NavigationProps>()
   
   const user = useAppSelector(selectUser);

    const seConnecter = ()=>{
        Navigation.navigate('Login',{})
    }

    const sInscrire = () =>{
        Navigation.navigate('Registeur', {})
    }

    return(
        <View>
            <Text>{user?.currentUser?.id}</Text>
            <TouchableOpacity onPress={seConnecter}>
                <View >
                    <Text >Se Connecter</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={sInscrire}>
                <View >
                    <Text >S'inscrire</Text>
                </View>
            </TouchableOpacity>
        </View>
)}

export default Home;