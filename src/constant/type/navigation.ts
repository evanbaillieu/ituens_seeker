
import type { StackScreenProps } from '@react-navigation/stack';


import { IHomeProps } from "../../screen/Home";
import { ILoginProps } from "../../screen/Login";
import { IRegisterProps } from "../../screen/Register";

export type StackParamList  = {
    Home: IHomeProps;
    Login: ILoginProps;
    Registeur: IRegisterProps;
}

export type ILoginScreenNavigationProps = StackScreenProps<StackParamList, 'Home'>;
