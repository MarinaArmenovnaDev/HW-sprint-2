import React from 'react'
import { Slider, SliderProps } from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                width: 147,
                height: 4,
                color: '#00CC22',
                padding: '13px 0',
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    opacity: 1,
                    height: 4,
                    borderRadius: 10,
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    height: 4,
                    borderRadius: 10,
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#00CC22',
                    border: '4px solid white',
                    boxShadow: '0 0 0 2px rgba(0, 204, 34, 0.3)',
                    '&:hover, &.Mui-active': {
                        boxShadow: '0 0 0 4px rgba(0, 204, 34, 0.3)',
                    },
                    '&:before': {
                        display: 'none',
                    },
                },
                '& .MuiSlider-valueLabel': {
                    backgroundColor: 'transparent',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: 12,
                    top: -30,
                },
            }}
            {...props}
        />
    )
}

export default SuperRange
