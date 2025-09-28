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
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', display: 'inline-flex', flexDirection: 'column', marginLeft: '5px' }}
        >
            {/* Стрелка вверх */}
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginBottom: '1px' }}
            >
                <path
                    d="M5 0.5L0 5.5L10 5.5L5 0.5Z"
                    fill={sort === up ? '#000' : '#adabac'}
                />
            </svg>

            {/* Стрелка вниз */}
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5 5.5L10 0.5L0 0.5L5 5.5Z"
                    fill={sort === down ? '#000' : '#adabac'}
                />
            </svg>
        </span>
    )
}

export default SuperSort
