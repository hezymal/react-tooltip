import React, { FC } from "react";
import styled from "styled-components";

export interface TooltipProps {
    children: JSX.Element;
    tip: JSX.Element;
}

const StyledTooltip = styled.div`
    box-sizing: border-box;
    position: relative;
`;

const StyledTip = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const Tooltip: FC<TooltipProps> = ({ children, tip }) => {
    return (
        <StyledTooltip>
            <StyledTip>{tip}</StyledTip>
            {children}
        </StyledTooltip>
    );
};
