import { makeStyles } from "@material-ui/core/styles";
import Header from "pages/home/Header";

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
  title: {
    color: "#fff",
    maxWidth: "1000px",
    width: "100%",
    fontWeight: "700",
    fontSize: 24,
    marginBottom: 20,
  },
  list: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    color: "#989DB5",
    maxWidth: "1000px",
    fontSize: 16,
    width: "100%",
    height: "100%",
    overflowX: "scroll",
  },
  listItem: { marginBottom: 20, display: "flex", flexDirection: "column" },
  subTitle: {
    color: "#fff",
    fontSize: 24,
    margin: "30px 0 10px 0 ",
  },
});
const InfoPage = ({ title, data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />

      <span className={classes.title}>{title}</span>
      <ul className={classes.list}>
        {data.map((item, ind) => (
          <li key={item?.text} className={classes.listItem}>
            {!!item?.title && <span className={classes.subTitle}>{item.title}</span>}
            {!!item?.text && <span>{item.text}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoPage;
