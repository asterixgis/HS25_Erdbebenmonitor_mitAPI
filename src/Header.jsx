import { Stack, Typography, ButtonGroup, Button } from "@mui/material";

export const Header = ({ setZeitintervall, setMagnitude }) => {
  return (
    <div className="header">
      <header>
        <Typography
          sx={{
            backgroundColor: "#eee333",
            color: "black",
            textAlign: "center",
            py: 2,
          }}
          variant="h4"
        >
          IGEO Erdbebenmonitor
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
          }}
        >
          <ButtonGroup variant="outlined" aria-label="Zeitintervall filter">
            <Button onClick={() => setZeitintervall("hour")}>hour</Button>
            <Button onClick={() => setZeitintervall("day")}>day</Button>
            <Button onClick={() => setZeitintervall("week")}>week</Button>
            <Button onClick={() => setZeitintervall("month")}>month</Button>
          </ButtonGroup>

          <ButtonGroup variant="outlined" aria-label="Magnitude filter">
            <Button onClick={() => setMagnitude("significant")}>
              significant
            </Button>
            <Button onClick={() => setMagnitude("4.5")}>4.5</Button>
            <Button onClick={() => setMagnitude("2.5")}>2.5</Button>
            <Button onClick={() => setMagnitude("1.0")}>1.0</Button>
            <Button onClick={() => setMagnitude("all")}>all</Button>
          </ButtonGroup>
        </Stack>
      </header>
    </div>
  );
};
