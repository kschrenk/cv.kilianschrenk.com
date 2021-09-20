import { StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        paddingTop: 45,
        paddingBottom: 65,
        paddingLeft: 45,
        paddingRight: 35,
        fontFamily: "Roboto",
    },
    section: {
        fontSize: 12,
        marginBottom: 12,
    },
    row: {
        display: "flex",
        flexDirection: "row",
        borderTop: "1px solid orange"
    },
    borderLeft: {
        borderLeft: "1px solid orange",
        paddingLeft: 14,
    },
    col6: {
        width: "50%",
    },
    col4: {
        width: "40%",
    },
    col9: {
        width: "66%",
    },
    bgPrimary: {
        backgroundColor: "#e9e9e9",
    },
    fontLight: {
        fontFamily: 'Roboto',
        fontWeight: 'light',
    },
    fontBold: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    fontNormal: {
        fontSize: 12,
    },
    fontSmall: {
        fontSize: 11,
    },
    mb1: {
        marginBottom: 8,
    },
    my2: {
        marginTop: 16,
        marginBottom: 16,
    },
    py2: {
        paddingTop: 32,
        paddingBottom: 32,
    }
});

export default styles;

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: "../../assets/fonts/Roboto-Regular.ttf"
        },
        {
            src: '../../assets/fonts/Roboto-Bold.ttf',
            fontWeight: 'bold',
        }, 
        {
            src: '../../assets/fonts/Roboto-Light.ttf',
            fontWeight: 'light'
        }
    ]
})

