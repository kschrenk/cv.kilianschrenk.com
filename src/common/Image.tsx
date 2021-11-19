type ImageProps = {
    src: string;
    filter: 'gray' | 'none'
}

export default function Image({src, filter='none'}:ImageProps){
    if(src === '') {
        throw new Error('Compoany logo could no be loaded.');
    }

    return <img src={src} className={`${filter === 'gray' && 'filter-gray'} opacity-low`} alt={'company logo'} style={{width: '100%', height: 'auto', maxHeight: '100%'}}/>
}
