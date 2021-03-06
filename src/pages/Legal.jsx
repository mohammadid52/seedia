import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { countries } from '../values/values'

export default function Legal() {
  const [age, setAge] = React.useState('')
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Information 1
      </Typography>
      <Typography variant="h6" gutterBottom>
        Create a buisness account I dpn't have a company
      </Typography>
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            {countries.map((country, key) => {
              return (
                <MenuItem key={key} value={10}>
                  {country.label}
                </MenuItem>
              )
            })}
          </Select>
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Legal email address"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Postal code"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Place"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            type="number"
            id="company email"
            label="Legal phone number of company"
            autoComplete="cc-number"
          />
        </Grid>

        <Grid item sm={12}>
          <Typography variant="h6" gutterBottom>
            Type of company
          </Typography>

          <InputLabel id="demo-simple-select-label">
            Select buisness type
          </InputLabel>

          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Demo1</MenuItem>
            <MenuItem value={10}>Demo2</MenuItem>
          </Select>
        </Grid>
        <Grid item sm={12}>
          <InputLabel id="demo-simple-select-label">
            Buisness entity type
          </InputLabel>

          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Demo1</MenuItem>
            <MenuItem value={10}>Demo2</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            type="number"
            id="company email"
            label="Company registration number"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            type="number"
            id="company email"
            label="Industry type"
            autoComplete="cc-number"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
