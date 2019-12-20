import React, { useState, useEffect } from 'react';

import { apiService } from '../../services/api';
import { updateDimensions } from '../../commons/useful';
import { Search } from '../../components';
import { StyledRoot, StyledMain } from './styled';
import List from './List';
import Panel from './Panel';


export default function Weather() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);
    const [screen, setScreen] = useState({ width: 0 });

    useEffect(() => {
        updateDimensions(setScreen)();
        window.addEventListener('resize', updateDimensions(setScreen));

        return () => window.removeEventListener('resize', updateDimensions(setScreen))
    }, []);

    const onSearch = event => {
        setSearch(event.target.value);
    }

    const onClickSearch = () => {
        apiService.get(`/forecast?q=${search}`)
            .then(res => {
                setData(res.data);
            });
    }

    return (
        <StyledRoot>
            <Search search={search} onSearch={onSearch} onClick={onClickSearch} />
            {data && (
                <StyledMain screen={screen}>
                    <Panel screen={screen} data={data['city']} />

                    <List screen={screen} data={data} />
                </StyledMain>
                )}
        </StyledRoot >
    );
};
