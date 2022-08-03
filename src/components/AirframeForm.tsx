import { FormControlUnstyled } from '@mui/base';
import { TextField, Card, CardActions, CardContent, Button } from '@mui/material';
import { css } from '@emotion/css';

const styles = {
  airframeSearchForm: css`
    margin-top: 70px;
  `,
};

export const AirframeForm = () => {

  return (
    <FormControlUnstyled className={styles.airframeSearchForm}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField id="outlined-basic" label="機体名" variant="outlined" />
        </CardContent>
        <CardActions>
          <Button size="small">検索</Button>
        </CardActions>
      </Card>
    </FormControlUnstyled>
  );
};
