import styled, { css } from 'styled-components'
import { PRIMARY_COLOR,SECONDARY_COLOR,SUCCESS_COLOR } from '../styles'

// TODO put TEXT STYLE IN OWN COMPONENT
// styled.element`styles here in string`
const Badge = styled.span`
    color: #ff0000;
    font-size:40px;
    padding: 4px 7px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 9px;
    line-height: 11px;
    text-align: center;
    color:white;
    background: ${PRIMARY_COLOR};
    border-radius: ${props => props.rounded ? '15px':'2px'};
    
    &:hover{
        cursor: pointer;
    }
    ${(props)=>
        props.secondary && css`
          background:${SECONDARY_COLOR}
        `
    }
    ${(props)=>
        props.success && css`
          background:${SUCCESS_COLOR}
        `
    }
`

export default Badge