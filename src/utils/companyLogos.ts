import logoSblum from '../assets/images/sblum.svg';
import logoSz from '../assets/images/sz.svg';
import drpfleger from '../assets/images/drpfleger.svg';
import salewa from '../assets/images/salewa.svg';
import adidas from '../assets/images/adidas.svg';
import unibamberg from '../assets/images/unibamberg.svg';
import udacity from '../assets/images/udacity.svg';
import watt from '../assets/images/121watt.svg';
import boulderlounge from '../assets/images/boulderlounge.svg';
import regensburg from '../assets/images/regensburg.svg';
import google from '../assets/images/google.svg';

export function getCompanyLogo(imageName:string) {
    switch(imageName) {
        case 'sblum': 
            return logoSblum;
        case 'sz': 
            return logoSz;
        case 'drpfleger': 
            return drpfleger;
        case 'salewa': 
            return salewa;
        case 'adidas': 
            return adidas;
        case 'unibamberg': 
            return unibamberg;
        case 'udacity': 
            return udacity;
        case '121watt': 
            return watt;
        case 'boulderlounge': 
            return boulderlounge;
        case 'regensburg': 
            return regensburg;
        case 'google': 
            return google;
    }

    return '';
}