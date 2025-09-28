import React from 'react'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up
    } else if (sort === up) {
        return ''
    } else {
        return down
    }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value  // сортировка по возрастанию (↑)
    const down = '1' + value // сортировка по убыванию (↓)

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    // Определяем активную иконку
    const getIcon = () => {
        if (sort === down) {
            // Активная сортировка по убыванию (↓)
            return (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5.5L10 0.5L0 0.5L5 5.5Z" fill="#1976d2"/>
                </svg>
            )
        } else if (sort === up) {
            // Активная сортировка по возрастанию (↑)
            return (
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 0.5L0 5.5L10 5.5L5 0.5Z" fill="#1976d2"/>
                </svg>
            )
        } else {
            // Неактивное состояние (обе иконки серые)
            return (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                    <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0L10 4H0L5 0Z" fill="#ADABAC"/>
                    </svg>
                    <svg width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 4L0 0H10L5 4Z" fill="#ADABAC"/>
                    </svg>
                </div>
            )
        }
    }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{
                cursor: 'pointer',
                marginLeft: '5px',
                display: 'inline-flex',
                alignItems: 'center'
            }}
        >
            {getIcon()}
        </span>
    )
}

export default SuperSort
