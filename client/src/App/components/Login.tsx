import * as React from 'react';
import styled from 'styled-components';

const StyledAuthenticationWrapper = styled.div`
    height: 100%;
    display: flex;
`;

const StyledSideContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledPoistioningBox = styled.div`
    height: 80%;
    width: 80%;
    padding: 10% 15%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledCenteredItems = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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
    width: 100%;
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

export const Login: React.FunctionComponent<{}> = () => {
    return (
        <StyledAuthenticationWrapper>
            <StyledSideContainer>
                <StyledPoistioningBox>
                    <StyledWelcomeText>
                        <span className="title">Welcome,</span>
                        <span>login to your account.</span>
                    </StyledWelcomeText>
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
                    </StyledLogin>
                    <StyledCenteredItems>
                        <StyledLabel>-- or --</StyledLabel>
                        <StyledButton>Sign up</StyledButton>
                    </StyledCenteredItems>
                </StyledPoistioningBox>
            </StyledSideContainer>
            <StyledSideContainer>
                <StyledPoistioningBox>
                    <img src="" alt="" />
                </StyledPoistioningBox>
            </StyledSideContainer>
        </StyledAuthenticationWrapper>
    );
};
