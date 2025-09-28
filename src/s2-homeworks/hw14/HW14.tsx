import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW14.module.css'
import axios from 'axios'
import SuperDebouncedInput from './common/c8-SuperDebouncedInput/SuperDebouncedInput'
import {useSearchParams} from "react-router-dom";

/*
* 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
* 2 - дописать функцию sendQuery в HW14
* 3 - дописать функцию onChangeText в HW14
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW14 в HW5/pages/JuniorPlus
* */

const getTechs = (find: string) => {
    return axios
        .get<{ techs: string[] }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test2',
            {params: {find}}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW14 = () => {
    const [find, setFind] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    const [techs, setTechs] = useState<string[]>([])

    // Загрузка начальных данных при монтировании
    useEffect(() => {
        const urlFind = searchParams.get('find')
        if (urlFind) {
            sendQuery(urlFind) // Если есть параметр в URL, ищем по нему
        } else {
            sendQuery('') // Если нет параметра, загружаем весь список
        }
    }, [])

    const sendQuery = (value: string) => {
        if (value !== '') {
            setLoading(true)
        }
        getTechs(value)
            .then((res) => {
                setLoading(false)
                if(res && res.data) {
                    setTechs(res.data.techs)
                }
                // делает студент
                // сохранить пришедшие данные
            }).catch(() => {
            setLoading(false)
            setTechs([])
        })
    }

    const onChangeText = (value: string) => {
        setFind(value)
        // делает студент
        if (value) {
            setSearchParams({ find: value })
        } else {
            // Если значение пустое, удаляем параметр
            setSearchParams({})
        }
        // добавить/заменить значение в квери урла
    }



    const mappedTechs = techs.map(t => (
        <div key={t} id={'hw14-tech-' + t} className={s.tech}>
            {t}
        </div>
    ))

    return (
        <div id={'hw14'}>
            <div className={s2.hwTitle}>Homework #14</div>

            <div className={s2.hw}>
                <SuperDebouncedInput
                    id={'hw14-super-debounced-input'}
                    value={find}
                    onChangeText={onChangeText}
                    onDebouncedChange={sendQuery}
                />

                <div id={'hw14-loading'} className={s.loading}>
                    {isLoading ? '...ищем' : <br/>}
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW14
