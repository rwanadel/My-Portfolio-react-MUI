import { Button, Stack, TextField } from "@mui/material";

import { useForm } from "react-hook-form";

export const AskClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onValidation = (data) => {
    console.log(data);
  };
  return (
    <>
      <div style={{ padding: 40 }}>
        <Stack
          sx={{ width: "100%", maxWidth: 500, margin: "auto", spacing: 3 }}
          component="form"
          onSubmit={handleSubmit(onValidation)}
          spacing={3}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
            <TextField
              sx={{
                flex: 1,
                "& .MuiInputBase-input::placeholder": {
                  color: "gray",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#dfd3ca",
                  },
                  "&:hover fieldset": {
                    borderColor: "#dfd3ca",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#dfd3ca",
                  },
                },
              }}
              error={!!errors?.name}
              placeholder="name"
              {...register("name", { required: "Enter your Name , plz" })}
              helperText={errors?.name?.message}
            />

            <TextField
              sx={{
                flex: 1,
                "& .MuiInputBase-input::placeholder": {
                  color: "gray",
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#dfd3ca", // default border color
                  },
                  "&:hover fieldset": {
                    borderColor: "#dfd3ca", // border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#dfd3ca", // border color when focused
                  },
                },
              }}
              error={!!errors?.email}
              placeholder="Email"
              {...register("email", { required: "Enter your email,plz" })}
              helperText={errors?.email?.message}
            />
          </div>

          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#dfd3ca", // default border color
                },
                "&:hover fieldset": {
                  borderColor: "#dfd3ca", // border color on hover
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dfd3ca", // border color when focused
                },
              },
            }}
            error={!!errors?.subject}
            placeholder="Subject"
            {...register("subject", { required: "Enter subject ,plz" })}
            helperText={errors?.subject?.message}
          />

          <TextField
            sx={{
              "& .MuiInputBase-input::placeholder": {
                color: "gray",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#dfd3ca",
                },
                "&:hover fieldset": {
                  borderColor: "#dfd3ca",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#dfd3ca",
                },
              },
            }}
            multiline
            rows={3}
            placeholder="Message"
            error={!!errors?.Message}
            {...register("Message", { required: "This field is required" })}
            helperText={errors?.Message?.message}
          />
          <Button type="submit" variant="contained">
            Send Message
          </Button>
        </Stack>
      </div>
    </>
  );
};
