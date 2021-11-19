//@ts-ignore
import logoSblum from '../assets/images/sblum.svg';

//@ts-ignore
import logoSz from '../assets/images/sz.svg';

//@ts-ignore
import drpfleger from '../assets/images/drpfleger.svg';

//@ts-ignore
import ks from '../assets/images/ks.png';

//@ts-ignore
import salewa from '../assets/images/salewa.svg';

//@ts-ignore
import adidas from '../assets/images/adidas.svg';

export function getCompanyLogo(imageName:string) {
    switch(imageName) {
        case 'sblum': 
            return logoSblum;
        case 'sz': 
            return logoSz;
        case 'drpfleger': 
            return drpfleger;
        case 'ks': 
            return ks;
        case 'salewa': 
            return salewa;
        case 'adidas': 
            return adidas;
    }

    return '';
}