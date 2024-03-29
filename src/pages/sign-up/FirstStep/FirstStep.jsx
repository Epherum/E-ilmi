import React, { useState, useEffect } from "react";

import useStyles from "./styles";

import {
  Divider,
  Grid,
  Button,
  InputLabel,
  FormControl,
  InputAdornment,
  FilledInput,
  Alert,
  OutlinedInput,
  IconButton,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { Email, Phone } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";

import SecondStep from "../SecondStep/SecondStep";

import Aos from "aos";

const FirstStep = ({
  values,
  handleChange,
  isSellerAccount,
  setIsSellerAccount,
  signUpWithEmail,
  setSignUpWithEmail,
  setFirstStepIsCompleted,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const classes = useStyles();

  const [emailAlreadyExists, setEmailAlreadyExists] = useState(false);
  const [phoneNumberAlreadyExists, setPhoneNumberAlreadyExists] =
    useState(false);
  const [continueButtonIsLoading, setContinueButtonIsLoading] = useState(false);

  const handleContinue = async () => {
    setContinueButtonIsLoading(true);
    if (isSellerAccount) {
      let response = await fetch("https://localhost:8000/api/sellers/all", {
        method: "GET",
      });
      let content = await response.json();

      let sellers = content.data;

      if (signUpWithEmail) {
        let sellersEmails = sellers.map((seller) => seller.email);
        sellersEmails.includes(values.email)
          ? setEmailAlreadyExists(true)
          : setEmailAlreadyExists(false);
        sellersEmails.includes(values.email)
          ? setFirstStepIsCompleted(false)
          : setFirstStepIsCompleted(true);
      } else {
        let sellersPhoneNumbers = sellers.map((seller) => seller.phoneNumber);
        sellersPhoneNumbers.includes(values.phoneNumber)
          ? setPhoneNumberAlreadyExists(true)
          : setPhoneNumberAlreadyExists(false);
        sellersPhoneNumbers.includes(values.phoneNumber)
          ? setFirstStepIsCompleted(false)
          : setFirstStepIsCompleted(true);
      }
    } else {
      let response = await fetch("https://localhost:8000/api/clients/all", {
        method: "GET",
      });
      let content = await response.json();

      let clients = content.data;

      if (signUpWithEmail) {
        let clientsEmails = clients.map((client) => client.email);
        clientsEmails.includes(values.email)
          ? setEmailAlreadyExists(true)
          : setEmailAlreadyExists(false);
        clientsEmails.includes(values.email)
          ? setFirstStepIsCompleted(false)
          : setFirstStepIsCompleted(true);
      } else {
        let clientsPhoneNumbers = clients.map((client) => client.phoneNumber);
        clientsPhoneNumbers.includes(values.phoneNumber)
          ? setPhoneNumberAlreadyExists(true)
          : setPhoneNumberAlreadyExists(false);
        clientsPhoneNumbers.includes(values.phoneNumber)
          ? setFirstStepIsCompleted(false)
          : setFirstStepIsCompleted(true);
      }
    }
    window.setTimeout(() => setContinueButtonIsLoading(false), 1000);
  };

  return (
    <div className={classes.first_step_page}>
      <div className={classes.first_step_page_container} data-aos="zoom-in">
        <div className={classes.first_step_page_header}>
          <h3>Inscription</h3>
        </div>
        <Divider></Divider>
        <div className={classes.first_step_page_body}>
          <h4 className={classes.title}>Bienvenue sur E-ILIMI</h4>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <h5 className={classes.user_type_choice_title}>
                  Quel type de compte voulez-vous créer ?
                </h5>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Button
                  variant={isSellerAccount ? "outlined" : "contained"}
                  startIcon={isSellerAccount ? "" : <CheckIcon />}
                  onClick={() => setIsSellerAccount(false)}
                  sx={
                    isSellerAccount
                      ? {
                          border: "2px solid #222831",
                          fontWeight: "bold",
                          fontFamily: "'Roboto Mono', monospace",
                          color: "#222831",
                          "&:hover": { border: "2px solid #222831" },
                        }
                      : {
                          border: "2px solid #222831",
                          fontWeight: "bold",
                          fontFamily: "'Roboto Mono', monospace",
                          backgroundColor: "#FFD369",
                          color: "#222831",
                          border: "2px solid #222831",
                          "&:hover": { backgroundColor: "#FFD369" },
                        }
                  }
                >
                  Acheteur
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <Button
                  variant={isSellerAccount ? "contained" : "outlined"}
                  startIcon={isSellerAccount ? <CheckIcon /> : ""}
                  onClick={() => setIsSellerAccount(true)}
                  sx={
                    isSellerAccount
                      ? {
                          fontWeight: "bold",
                          fontFamily: "'Roboto Mono', monospace",
                          backgroundColor: "#FFD369",
                          color: "#222831",
                          border: "2px solid #222831",
                          "&:hover": { backgroundColor: "#FFD369" },
                        }
                      : {
                          border: "2px solid #222831",
                          fontWeight: "bold",
                          fontFamily: "'Roboto Mono', monospace",
                          color: "#222831",
                          "&:hover": { border: "2px solid #222831" },
                        }
                  }
                >
                  Vendeur
                </Button>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel
                    htmlFor="phone-number-or-email"
                    sx={{
                      backgroundColor: "#EEEEEE",
                      pl: 2,
                      pr: 2,
                      fontWeight: "bold",
                      fontFamily: "'Roboto Mono', monospace",
                    }}
                  >
                    {signUpWithEmail
                      ? "Votre adresse email"
                      : "Votre numéro de telephone"}
                  </InputLabel>
                  <OutlinedInput
                    fullWidth
                    id="phone-number-or-email"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Roboto Mono', monospace",
                    }}
                    inputProps={
                      signUpWithEmail
                        ? { pattern: "[a-zA-Z_]+@[a-zA-z]+.[a-zA-Z_]{2,}" }
                        : {
                            inputMode: "numeric",
                            pattern: "[0-9]{8,8}",
                            maxlength: 8,
                          }
                    }
                    value={signUpWithEmail ? values.email : values.phoneNumber}
                    onChange={
                      signUpWithEmail
                        ? handleChange("email")
                        : handleChange("phoneNumber")
                    }
                    startAdornment={
                      <InputAdornment
                        position="start"
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "'Roboto Mono', monospace",
                        }}
                      >
                        {signUpWithEmail ? (
                          <IconButton>
                            <Email color="primary" />
                          </IconButton>
                        ) : (
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: "bold",
                              fontFamily: "'Roboto Mono', monospace",
                            }}
                          >
                            +227
                          </Typography>
                        )}
                      </InputAdornment>
                    }
                  />
                  <Alert
                    severity="error"
                    sx={
                      signUpWithEmail && emailAlreadyExists
                        ? { mt: 1, mb: 1 }
                        : { display: "none" }
                    }
                  >
                    Cet adresse Email existe déja
                  </Alert>
                  <Alert
                    severity="error"
                    sx={
                      !signUpWithEmail && phoneNumberAlreadyExists
                        ? { mt: 1, mb: 1 }
                        : { display: "none" }
                    }
                  >
                    Ce numéro existe déja.
                  </Alert>
                  <small className={classes.send_message_notif}>
                    Nous vous enverrons un {signUpWithEmail ? "mail" : "SMS"}{" "}
                    pour verifier que{" "}
                    {signUpWithEmail
                      ? "cette adresse email"
                      : "ce numéro de telephone"}{" "}
                    vous appartient.
                    <strong>NB : </strong>Ce mail ou cet SMS vous couteras rien.
                    <a href="#">Politique de confidentialité</a>.
                  </small>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={
                    continueButtonIsLoading
                      ? { display: "none" }
                      : {
                          width: "100%",
                          backgroundColor: "#FFD369",
                          color: "#222831",
                          fontWeight: "bold",
                          border: "2px solid #222831",
                          "&:hover": { backgroundColor: "#FFD369" },
                        }
                  }
                  onClick={handleContinue}
                >
                  Continuer
                </Button>
                <LoadingButton
                  variant="contained"
                  loading
                  sx={
                    !continueButtonIsLoading
                      ? { display: "none" }
                      : { width: "100%", fontWeight: "bold" }
                  }
                  onClick={handleContinue}
                >
                  Continuer
                </LoadingButton>
                <small className={classes.go_to_sign_in_page}>
                  Vous avez déja un compte ?&nbsp; <a href="#">Conectez-vous</a>
                </small>
              </Grid>
              <Grid item xs={12}>
                <Divider>OU</Divider>
                <Button
                  variant="outlined"
                  sx={{
                    width: "100%",
                    fontWeight: "bold",
                    mt: 2,
                    color: "#222831",
                  }}
                  startIcon={signUpWithEmail ? <Phone /> : <Email />}
                  onClick={() => setSignUpWithEmail(!signUpWithEmail)}
                >
                  {signUpWithEmail
                    ? "Utiliser votre numéro de téléphone"
                    : "Utiliser votre adresse email"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
