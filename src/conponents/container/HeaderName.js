import { Box } from '@mui/material'
import React from 'react'

export default function HeaderName({name, i}) {
    const style = {
        color: 'red',
        position: "relative",
        display: 'inline-block',
        fontSize: 40, 
        fontFamily: 'fantasy',
        animationName: "NameHeader",
        animationDuration: '5s',
        animationTimingFunction: 'linear',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate', 
        animationDelay: i*2+'s',
        "@keyframes NameHeader": {
          '0%': {
              color: 'blue',
            },
            '50%': {
              color: 'green',
          },
          '100%': {
            color:'yello'
          }
        }
    }
      return (
        <Box sx={style} key={i}>
            {name}
        </Box>
      )
    }