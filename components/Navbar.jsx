import { useState } from "react";
import {AppBar, Button, Container, Box, Toolbar, Typography, Menu, MenuItem, IconButton, Slide} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useScrollTrigger} from "@mui/material";
import Link from 'next/link';

const pages = ['Movies', 'TV'];

const Navbar = () => {
    const [navAnchor, setNavAnchor] = useState(null);
    const trigger = useScrollTrigger();

    const handleOpenNavMenu = (event) => {
        setNavAnchor(event.currentTarget);
    }

    const handleCloseNavMenu = () => {
        setNavAnchor(null);
    }

    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            <AppBar style={{background: '#173352'}}>
                <Container maxWidth={'xl'}>
                    <Toolbar disableGutters>
                        <Typography
                            variant={'h6'}
                            noWrap
                            component={'a'}
                            href={'/'}
                            sx={{
                                mr: 2,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            WATCHIFY
                        </Typography>

                        <Box sx={{flexGrow: 1, display:{xs: 'none', md:'flex'}}}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    href={`/hot?media_type=${page.toLowerCase()}`}
                                    sx={{ my:2, color: 'white', display: 'block'}}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>

                        {/*TODO: maybe add icons next to the options for aesthetic*/}
                        <Box sx={{flexGrow: 0, display: { xs: 'block', md: 'none' }}} pl={'128px'}>
                            <IconButton
                                size={'large'}
                                aria-label={'mobile navbar'}
                                onClick={handleOpenNavMenu}
                                color={'inherit'}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                open={Boolean(navAnchor)}
                                onClose={handleCloseNavMenu}
                                anchorEl={navAnchor}
                                id={'nav-appbar'}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                sx={{
                                    mt: '45px',
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign={'center'}>
                                            <Link href={`/hot?media_type=${page.toLowerCase()}`}>{page}</Link>
                                        </Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>

                <Container >
                </Container>
            </AppBar>
        </Slide>
    );
}

export default Navbar;
