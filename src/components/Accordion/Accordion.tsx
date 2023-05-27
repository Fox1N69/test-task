import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./_accordion.component.scss";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  paddingRight: "1160px",
  backgroundColor: "#E1E1FB",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  height: "75px",
  padding: "0",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Выполненые задачи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="task__table">
              <table>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready">Выполнена</option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready">Выполнена</option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
              </table>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Задачи на сегодня</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="task__table">
              <table>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready" style={{ backgroundColor: "red" }}>
                        Выполнена
                      </option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready">Выполнена</option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
              </table>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Предстоящие задачи</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="task__table">
              <table>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready">Выполнена</option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
                <tr>
                  <td style={{ width: "99px" }}>01.01.0001</td>
                  <td style={{ width: "75px" }}>Шифр задачи</td>
                  <td style={{ width: "77px" }}>48/21</td>
                  <td style={{ width: "171px" }}>Прозвонить Копьева</td>
                  <td style={{ width: "113px" }}>
                    <select name="" id="task__select">
                      <option value="ready">Выполнена</option>
                      <option value="pause">На паузе</option>
                      <option value="work">В работе</option>
                    </select>
                  </td>
                  <td style={{ width: "108px" }}>Иванов В.А.</td>
                  <td style={{ width: "137px" }}>Свердлова А. И.</td>
                  <td style={{ width: "101px", paddingLeft: "50px" }}>2</td>
                  <td style={{ width: "121px" }}>Комментарий</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "82px" }}>00:15:00</td>
                  <td style={{ width: "105px" }}>01/01/0001 00:00:00</td>
                  <td style={{ width: "105px" }}>01/24/2023 10:23:17</td>
                </tr>
              </table>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
