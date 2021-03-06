import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/IconButton'

export default function Buiscc() {
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

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
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
          <TextField
            required
            fullWidth
            id="company name"
            label="Legal company name"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Legal company email address"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item sm={12}>
          <TextField
            required
            fullWidth
            id="company email"
            label="Reenter email address"
            autoComplete="cc-number"
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            fullWidth
            placeholder="Password"
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
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
      </Grid>
    </React.Fragment>
  )
}
