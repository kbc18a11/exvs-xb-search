import { TextField, Card, CardActions, CardContent, Button, MenuItem, InputLabel, Select } from '@mui/material';
import { css } from '@emotion/css';
import { useState } from 'react';

const styles = {
  airframeSearchForm: css`
    margin-top: 70px;
  `,
  costSelectLabel: css`
    margin-top: 20px;
  `,
  costSelect: css`
    min-width: 100px;
  `,
};

export const AirframeForm = () => {
  const [airframeName, setAirframeName] = useState('');
  const [cost, setCost] = useState(0);

  /**
   * 機体情報の取得
   */
  const getAirframeInfos = () => {
    console.log('aa');
  };

  return (
    <form className={styles.airframeSearchForm}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <InputLabel
          >
            機体名
          </InputLabel>
          <TextField
            variant="outlined"
            value={airframeName}
            onChange={e => setAirframeName(e.target.value)}
          />
          <InputLabel
            id="cost-label"
            className={styles.costSelectLabel}
          >
            機体コスト
          </InputLabel>
          <Select
            className={styles.costSelect}
            labelId="cost-label"
            value={cost}
            defaultValue={0}
            onChange={e => setCost(Number(e.target.value))}
          >
            <MenuItem value={0} defaultChecked>-</MenuItem>
            <MenuItem value={1500}>1500</MenuItem>
            <MenuItem value={2000}>2000</MenuItem>
            <MenuItem value={2500}>2500</MenuItem>
            <MenuItem value={3000}>3000</MenuItem>
          </Select>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            onClick={getAirframeInfos}
            fullWidth
          >
            検索
          </Button>
        </CardActions>
      </Card>
    </form >
  );
};
