import { InputLabel, TextField } from '@material-ui/core';
import { Button, MenuItem, Select } from '@mui/material';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import { Form } from './styles';

type InvestimentFormProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  coinName: string;
  setCoinName: Dispatch<SetStateAction<string>>;
  hasInvestiment: boolean;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
  handleCancel: () => void;
};

export default function InvestimentForm({
  handleSubmit,
  handleCancel,
  value,
  setValue,
  coinName,
  setCoinName,
  hasInvestiment,
}: InvestimentFormProps): JSX.Element {
  return (
    <Form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        required={true}
        label="Valor"
        variant="outlined"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="number"
      />
      <div className="input">
        <InputLabel id="demo-simple-select-helper-label">Moeda</InputLabel>
        <Select
          className="input"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={coinName}
          label="Age"
          disabled={hasInvestiment}
          onChange={(e) => setCoinName(e.target.value)}
        >
          <MenuItem selected={true} value={1}>
            Bitcoin
          </MenuItem>
          <MenuItem value={2}>Ethereum</MenuItem>
          <MenuItem value={3}>Litecoin</MenuItem>
          <MenuItem value={4}>Ripple</MenuItem>
          <MenuItem value={5}>Binance Coin</MenuItem>
        </Select>
      </div>
      <div className="buttons">
        <Button variant="contained" className="cancel_button" onClick={handleCancel}>
          Cancelar
        </Button>
        <Button variant="contained" color="primary" className="save_button" type="submit">
          Salvar
        </Button>
      </div>
    </Form>
  );
}
