import { css } from '@emotion/css';
import { AppBar, Toolbar, Typography } from '@mui/material';

const styles = {
  header: css`
    width: 80%;
  `
};


export const Header = () => {
  return (
    <AppBar className={styles.header}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EXVSXB機体情報検索
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
