import { Authenticator  } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import "./style.css";

export default function CustomAuthenticator({children}) {
    const component = {
        Header() {
            const { tokens } = useTheme();
            return (
                <View textAlign="center" padding={tokens.space.large}>
                  <Image
                    alt="Amplify logo"
                    src="https://docs.amplify.aws/assets/logo-dark.svg"
                  />
                </View>
            );
          
        }   
    }

    return (
        <Authenticator>
            {children}
        </Authenticator>
    )
}