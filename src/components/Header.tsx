import { AppBar, Button, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EXVSXB機体情報検索
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
