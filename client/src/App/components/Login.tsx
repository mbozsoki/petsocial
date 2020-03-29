import * as React from 'react';
import styled from 'styled-components';

import colors from '../../styles/colors';
import loginPicture from '../../Shared/assets/images/login-picture.jpg';

const StyledAuthenticationWrapper = styled.div`
    height: 80%;
    width: 60%;
    display: flex;
    background-color: ${colors.foregroundColor};
`;

const StyledSideContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const StyledPoistioningBox = styled.div`
    height: 80%;
    width: 100%;
    padding: 10% 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledWelcomeText = styled.div`
    span {
        display: block;
        color: grey;
        font-size: 18px;

        &.title {
            font-size: 24px;
            color: black;
        }
    }
`;

const StyledLogin = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledLabel = styled.label`
    color: grey;
    font-size: 14px;
`;

const StyledInput = styled.input`
    width: calc(100% - 30px);
    height: 35px;
    border: 1px solid grey;
    border-radius: 3px;
    padding: 0 15px;

    ::focus {
        outline: 2px solid blue;
    }
`;

const StyledButton = styled.button`
    width: 140px;
    color: grey;
    background-color: white;
    border-radius: 3px;
    border: 1px solid blue;
    outline: none;
    font-size: 14px;
    padding: 10px 25px;

    &.highlighted {
        color: white;
        background-color: blue;
        border: none;
    }
`;

const StyledRememberInputContainer = styled.div`
    display: flex;
    align-items: center;

    input {
        width: 16px;
        height: 16px;
        border: 1px solid grey;
        border-radius: 3px;
        margin-right: 5px;
    }

    span {
        font-size: 14px;
    }
`;

const StyledLogo = styled.div`
    color: ${colors.colorAccent1};
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 20px;
`;

export const Login: React.FunctionComponent<{}> = () => {
    return (
        <StyledAuthenticationWrapper>
            <StyledSideContainer>
                <StyledPoistioningBox>
                    <div>
                        <StyledLogo>petsocial</StyledLogo>
                        <StyledWelcomeText>
                            <span className="title">Welcome,</span>
                            <span>login to your account.</span>
                        </StyledWelcomeText>
                    </div>
                    <StyledLogin>
                        <div>
                            <StyledLabel>Username</StyledLabel>
                            <StyledInput type="text"></StyledInput>
                        </div>
                        <div>
                            <StyledLabel>Password</StyledLabel>
                            <StyledInput type="password"></StyledInput>
                        </div>
                        <StyledRememberInputContainer>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </StyledRememberInputContainer>
                        <StyledButton className="highlighted">
                            Login
                        </StyledButton>
                        <StyledButton>Sign up</StyledButton>
                    </StyledLogin>
                    <div>
                        By signing up, you agree to Petsocial's
                        <a href="#">Terms and Conditions</a> &
                        <a href="#">Privacy Policy</a>
                    </div>
                </StyledPoistioningBox>
            </StyledSideContainer>
            <StyledSideContainer>
                <img src={loginPicture} alt="" />
            </StyledSideContainer>
        </StyledAuthenticationWrapper>
    );
};
