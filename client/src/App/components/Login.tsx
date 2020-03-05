import * as React from 'react';
import styled from 'styled-components';

const SideContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Box = styled.div`
    height: 80%;
    width: 80%;
`;

const WelcomeTextContainer = styled.div`
    color: grey;
    font-size: 18px;
`;

const LoginButton = styled.button`
    color: white;
    background-color: blue;
    border-radius: 3px;
    border: none;
    outline: none;
    font-size: 14px;
    padding: 5px 20px 5px 20px;
`;

export const Login: React.FunctionComponent<{}> = () => {
    return (
        <>
            <SideContainer>
                <Box>
                    <WelcomeTextContainer>Welcome, login to your account.</WelcomeTextContainer>
                    <LoginButton>Login</LoginButton>
                    <div>-- or --</div>
                </Box>
            </SideContainer>
            <SideContainer>
                <Box></Box>
            </SideContainer>
        </>
    );
};
