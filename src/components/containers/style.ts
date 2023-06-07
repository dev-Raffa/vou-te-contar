'use client'

import { styled } from "styled-components";
import { blockProps } from "./types";

//@ts-ignore
export const BlockStyle = styled('div').attrs<blockProps>(({variant})=> ({as: variant}))<blockProps>`
  ${({position})=> position && `position: ${position};`}
  ${({left})=> left && `left: ${left};`}
  ${({top})=> top && `top: ${top};`}
  ${({right})=> right && `right: ${right};`}
  ${({bottom})=> bottom && `bottom: ${bottom};`}
  ${({display})=> display && `display: ${display};`}
  ${({columns})=> columns && `columns: ${columns};`}
  ${({templatecolumns})=> templatecolumns && `grid-template-columns: ${templatecolumns};`}
  ${({rows})=> rows && `rows: ${rows};`}
  ${({templaterows})=> templaterows && `grid-template-rows: ${templaterows};`}
  ${({direction})=> direction && `flex-direction: ${direction};`}
  ${({wrap})=> wrap && `flex-wrap: ${wrap};`}
  ${({alignx})=> alignx && `justify-content: ${alignx};`}
  ${({aligny})=> aligny && `align-items: ${aligny};`}
  ${({margin})=> margin && `margin: ${margin};`}
  ${({padding})=> padding && `padding: ${padding};`}
  ${({gap})=> gap && `gap: ${gap};`}
  ${({height})=> height && `height: ${height};`}
  ${({maxheight})=> maxheight && `max-height: ${maxheight};`}
  ${({minheight})=> minheight && `min-height: ${minheight};`}
  ${({width})=> width && `width: ${width};`}
  ${({maxwidth})=> maxwidth && `max-width: ${maxwidth};`}
  ${({minwidth})=> minwidth && `min-width: ${minwidth};`}
  ${({ bgcolor, theme }) =>
    bgcolor != undefined
      && theme.colors[bgcolor]
        ? `background-color:${theme.colors[bgcolor]};`
        : `background-color:${bgcolor};`
  }
  ${({ color, theme }) =>
    color != undefined
      && theme.typography.colors[color]
        ? `color:${theme.typography.colors[color]};`
        : `color:${color};`
  }
  ${({zindex})=> zindex && `z-index: ${zindex};`}
`