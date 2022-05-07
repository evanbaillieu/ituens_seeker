import Config from '../config/config'
import { IConfig } from '../config/config.type';

export const getConfig = (): IConfig =>{
    return Config;
}