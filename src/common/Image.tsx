import { useThemeContext } from '../store/ThemeContextProvider';

type ImageProps = {
    src: string;
    filter?: 'gray'
}

export default function Image({src, filter}:ImageProps){
    const theme = useThemeContext();

    if(src === '') {
        throw new Error('Compoany logo could no be loaded.');
    }

    let imageStyles = [];

    if(filter) {
        imageStyles.push('opacity-low');
        if(theme === 'dark') imageStyles.push('filter-white');
        if(theme === 'light') imageStyles.push('filter-gray');
    }

    return (
        <img 
            src={src} 
            className={imageStyles.join(' ')} 
            alt={'company logo'} 
            style={{width: '100%', height: 'auto', maxHeight: '100%'}}
        />
    );
}
