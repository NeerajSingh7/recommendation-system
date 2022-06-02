import React, { useState } from 'react';
import { AppBar, IconButton, InputAdornment, Stack, TextField, Toolbar, Typography } from '@mui/material';
import { LiveTv, Search } from '@mui/icons-material';

const Navbar = (props) => {
    const [searchVal, setSearchVal] = useState("");
    return (
        <>
            {/* <CssBaseline /> */}
            <AppBar position='sticky'>
                <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <LiveTv fontSize='large' />
                        <Typography variant='h4'>Movie World</Typography>
                    </Stack>
                    <Stack direction='row' spacing={2} alignItems='center'>
                        <TextField
                            variant='standard'
                            value={searchVal}
                            placeholder='search movies...'
                            sx={{ bgcolor: 'white', mr: '20px' }}
                            onChange={(e) => setSearchVal(e.target.value)}

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        <IconButton onClick={() => props.onSearch(searchVal)}>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar