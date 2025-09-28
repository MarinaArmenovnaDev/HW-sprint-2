import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: any, page: number) => {

        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (event: any) => {
        const newCount = Number(event.currentTarget.value)
        onChange(1, newCount)
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiPaginationItem-root': {
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '14px',
                        color: '#000000',
                        minWidth: '24px',
                        height: '24px',
                        margin: '0 2px',
                        borderRadius: '2px',
                        border: '1px solid #D9D9D9',
                        backgroundColor: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: '#F5F5F5',
                            borderColor: '#366EFF',
                        },
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: '#0066CC',
                        color: '#FFFFFF',
                        borderColor: '#0066CC',
                        '&:hover': {
                            backgroundColor: '#0052CC',
                        },
                    },
                    '& .MuiPaginationItem-ellipsis': {
                        color: '#000000',
                    },
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
