import { Authenticator, Heading, View, useTheme  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import "./style.css";

export default function CustomAuthenticator({children}) {
    const component = {
        Header() {
            const { tokens } = useTheme();
            return (
                <View textAlign="center" padding={tokens.space.large} marginTop={tokens.space.xxl}>
                    <Heading
                        level={3} 
                    >
                        Join Our Referral Program
                    </Heading>
                </View>
            );
          
        }   
    }

    return (
        <Authenticator components={component}>
            {children}
        </Authenticator>
    )
}