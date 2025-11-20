import React from 'react';
import styled from 'styled-components';

const Loader = () => {
    return (
        <div className='w-full h-[60vh] flex items-center justify-center'>
            <StyledWrapper>
                <div className="loader" />
            </StyledWrapper>
        </div>
    );
}

const StyledWrapper = styled.div`
.loader {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-sizing: border-box;
    border-top: 8px solid #CAEB66;
    border-left: 8px solid #CAEB66;
    border-right: 8px solid #ff00;
    animation: loader .7s infinite linear;
}

@keyframes loader {
    to {
    transform: rotate(360deg);
    }
}`;

export default Loader;
