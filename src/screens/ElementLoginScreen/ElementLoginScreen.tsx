import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export const ElementLoginScreen = (): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "1366px",
          height: "886px",
          overflow: "hidden",
          bgcolor: "background.default",
        }}
      >
        {/* Bupa Logo */}
        <Box
          sx={{
            position: "absolute",
            width: "89px",
            height: "89px",
            top: "160px",
            left: "981px",
          }}
        >
          <Box
            sx={{
              height: "89px",
              backgroundImage:
                "url(https://c.animaapp.com/0gapaIhT/img/vector.svg)",
              backgroundSize: "100% 100%",
            }}
          >
            <Box
              sx={{
                width: "89px",
                height: "89px",
                backgroundImage:
                  "url(https://c.animaapp.com/0gapaIhT/img/mask-group@2x.png)",
                backgroundSize: "100% 100%",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "83px",
                  height: "37px",
                  top: "9px",
                  left: "6px",
                  backgroundImage:
                    "url(https://c.animaapp.com/0gapaIhT/img/mask-group-1@2x.png)",
                  backgroundSize: "100% 100%",
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Username Field */}
        <Box
          sx={{
            position: "absolute",
            top: "356px",
            left: "878px",
            display: "flex",
            flexDirection: "column",
            width: "295px",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.800",
              fontFamily: "Roboto, Helvetica",
            }}
          >
            Username
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter Username"
            variant="outlined"
            value={username}
            onChange={handleUsernameChange}
            size="small"
            InputProps={{
              sx: {
                height: "40px",
                bgcolor: "grey.50",
                borderColor: "grey.600",
              },
            }}
          />
        </Box>

        {/* Password Field */}
        <Box
          sx={{
            position: "absolute",
            top: "455px",
            left: "878px",
            display: "flex",
            flexDirection: "column",
            width: "295px",
            gap: 2,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "grey.800",
              fontFamily: "Roboto, Helvetica",
            }}
          >
            Password
          </Typography>

          <TextField
            fullWidth
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            onChange={handlePasswordChange}
            size="small"
            InputProps={{
              sx: {
                height: "40px",
                bgcolor: "grey.50",
                borderColor: "grey.600",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Sign In Button */}
        <Button
          variant="contained"
          sx={{
            position: "absolute",
            top: "612px",
            left: "878px",
            width: "295px",
            height: "40px",
            bgcolor: "grey.200",
            color: "grey.600",
            borderRadius: "4px",
            border: "1px solid",
            borderColor: "grey.400",
            textTransform: "none",
            "&:hover": {
              bgcolor: "grey.300",
            },
          }}
        >
          Sign In
        </Button>

        {/* Forgot Password Link */}
        <Typography
          sx={{
            position: "absolute",
            top: "538px",
            left: "1056px",
            fontFamily: "Roboto, Helvetica",
            fontWeight: 500,
            fontSize: "14px",
            lineHeight: "21px",
            color: "primary.main",
          }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              color: "primary.main",
            }}
          >
            Forgot Password ?
          </Link>
        </Typography>

        {/* Copyright */}
        <Typography
          sx={{
            position: "absolute",
            top: "809px",
            left: "991px",
            fontFamily: "Roboto, Helvetica",
            fontSize: "12px",
            lineHeight: "21px",
            color: "grey.900",
          }}
        >
          <Link
            href="https://www.bupa.com/important-notices/copyright-notice"
            target="_blank"
            rel="noopener noreferrer"
            underline="none"
            sx={{
              color: "grey.900",
            }}
          >
            © 2025 Bupa
          </Link>
        </Typography>

        {/* Sign In Title */}
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "302px",
            left: "878px",
            fontFamily: "Roboto, Helvetica",
            fontWeight: 700,
            fontSize: "22px",
            lineHeight: "27px",
            color: "grey.A100",
          }}
        >
          Sign In
        </Typography>

        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            width: "686px",
            height: "890px",
            top: "-1px",
            left: "-3px",
          }}
        >
          <Box
            component="img"
            src="https://c.animaapp.com/0gapaIhT/img/group-61.png"
            alt="Login background"
            sx={{
              position: "absolute",
              width: "683px",
              height: "886px",
              top: "1px",
              left: "3px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
