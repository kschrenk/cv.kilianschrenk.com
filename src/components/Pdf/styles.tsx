import { StyleSheet, Font } from '@react-pdf/renderer';
// @ts-ignore
import Roboto from '../../assets/fonts/Roboto-Regular.ttf';
// @ts-ignore
import RobotoBold from '../../assets/fonts/Roboto-Bold.ttf';
// @ts-ignore
import RobotoLight from '../../assets/fonts/Roboto-Light.ttf';
// @ts-ignore
import RobotoMedium from '../../assets/fonts/Roboto-Medium.ttf';

const styles = StyleSheet.create({
    page: {
        paddingTop: 45,
        paddingBottom: 65,
        paddingLeft: 42,
        paddingRight: 42,
        fontFamily: "Roboto",
    },
    section: {
        marginBottom: 12,
    },
    row: {
        display: "flex",
    },
    flexDirRow: {
        flexDirection: "row",
    },
    flexDirCol: {
        flexDirection: "column",
    },
    borderLeft: {
        borderLeft: "1px solid orange",
    },
    borderTop: {
        borderTop: "1px solid orange",
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
    fontMedium: {
        fontFamily: 'Roboto',
        fontWeight: 'medium',
    },
    fontBold: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
    },
    fontLarge: {
        fontSize: 13,
    },
    fontNormal: {
        fontSize: 12,
    },
    fontSmall: {
        fontSize: 10,
    },
    typoLight: {
        lineHeight: 1.4,
    },
    mb0: {
        marginBottom: 0,
    },
    mb1: {
        marginBottom: 4,
    },
    mb2: {
        marginBottom: 6,
    },
    mb3: {
        marginBottom: 22,
    },
    mt1: {
        marginTop: 4,
    },
    my2: {
        marginTop: 16,
        marginBottom: 16,
    },
    pb0: {
        paddingBottom: 0,
    },
    py2: {
        paddingTop: 32,
        paddingBottom: 32,
    },
    px2: {
        paddingLeft: 32,
        paddingRight: 32,
    },
    pr1: {
        paddingRight: 8,
    },
    pt1: {
        paddingRight: 8,
    }
});

export default styles;

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: Roboto,
        },
        {
            src: RobotoBold,
            fontWeight: 'bold',
        },
        {
            src: RobotoMedium,
            fontWeight: 'medium',
        },  
        {
            src: RobotoLight,
            fontWeight: 'light'
        }
    ]
})

