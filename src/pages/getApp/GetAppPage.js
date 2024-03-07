import { makeStyles } from "@material-ui/core/styles";
import Header from "pages/home/Header";
import app from "../../assets/images/app.png";

const useStyles = makeStyles({
  root: {
    padding: 30,
    backgroundColor: "#242945",
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "center",
  },
  image: { height: "60%", objectFit: "contain", margin: "30px 0" },
  title: { color: "#fff", maxWidth: "800px", fontWeight: "700", cursor: "pointer", fontSize: 24 },
  description: {
    color: "#989DB5",
    maxWidth: "800px",
    cursor: "pointer",
    fontSize: 24,
    width: 500,
    textAlign: "center",
  },
  button: { background: "#4F5CA1", color: "white", fontSize: 18, padding: "20px", "&:hover": { color: "white" } },
});
const GetAppPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <span className={classes.title}>Програма перегляду звітів</span>
      <img className={classes.image} src={app} alt="get app" />
      <a
        className={classes.button}
        href="https://github.com/autoscope-technology/reports-viewer/releases/download/v0.1.28/Reports-Viewer-0.1.28.exe"
        target="_blank"
        rel="noreferrer"
      >
        Завантажити програму Reports Viewer
      </a>
    </div>
  );
};

export default GetAppPage;
