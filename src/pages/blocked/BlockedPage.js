import { makeStyles } from "@material-ui/core/styles";
import Header from "pages/home/Header";
import blocked from "../../assets/images/blocked.png";

const useStyles = makeStyles({
  root: {
    padding: 30,
    backgroundColor: "#242945",
    display: "flex",
    flexFlow: "column",
    height: "100%",
    alignItems: "center",
  },
  image: { height: "70%", maxWidth: "800px", objectFit: "contain" },
  title: { color: "#fff", maxWidth: "800px", fontWeight: "700", cursor: "pointer", fontSize: 24 },
  description: {
    color: "#989DB5",
    maxWidth: "800px",
    cursor: "pointer",
    fontSize: 18,
    width: 500,
    textAlign: "center",
  },
});
const BlockedPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <img className={classes.image} src={blocked} alt="blocked" />
      <span className={classes.title}>Вас заблоковано! (</span>
      <span className={classes.description}>
        Ви можете звернутися в службу підтримки: 
        <a className={classes.description} href="mailto:support@waveform-analyzer.com">
          support@waveform-analyzer.com
        </a>
      </span>
    </div>
  );
};

export default BlockedPage;
