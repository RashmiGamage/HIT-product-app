import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "Rubik",
    margin: theme.spacing(2, 0, 2, 6),
  },
  paper: {
    borderRadius: theme.spacing(4),
    backgroundColor: "black",
    padding: theme.spacing(1, 2, 2, 4),
    margin: theme.spacing(2, 2, 10, 4),
    "& .MuiSvgIcon-root": {
      color: "#4a148c",
      fontSize: theme.spacing(5),
      fontWeight: 200,
      margin: theme.spacing(1, 1, 1, 2),
    },
    
  },
  image: {
    width: 200,
    height: 200,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    border: "3px solid white", 
  },
  
  detail: {
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    padding: theme.spacing(2),
  },
}));

export default useStyles;
