import { Svg, Circle, View } from "@react-pdf/renderer";
import styles from "../styles";

function BulletPoint(): JSX.Element {
    return (
        <View style={{...styles.pr1, marginTop: 5}}>
            <Svg width="4" height="4" viewBox="0 0 16 16">
                <Circle cx="8" cy="8" r="8" fill="#363636"/>
            </Svg>
        </View>
    );
}

export default BulletPoint;