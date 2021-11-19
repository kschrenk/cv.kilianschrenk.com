import { useThemeContext } from '../store/ThemeContextProvider';

type ImageProps = {
    src: string;
    filter: 'gray' | 'none'
}

export default function Image({src, filter='none'}:ImageProps){
    const theme = useThemeContext();

    if(src === '') {
        throw new Error('Compoany logo could no be loaded.');
    }

    return <img src={src} className={`${filter === 'gray' && theme === 'dark' ? 'filter-white' : 'filter-gray'} opacity-low`} alt={'company logo'} style={{width: '100%', height: 'auto', maxHeight: '100%'}}/>
}
