import { List, ListItem } from "@mui/material";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <List>
            <ListItem>
              <a href="#home">Home</a>
            </ListItem>
            <ListItem>
              <a href="#company">Company</a>
            </ListItem>
            <ListItem>
              <a href="#portfolio">Portfolio</a>
            </ListItem>
            <ListItem>
              <a href="#blog">Blog</a>
            </ListItem>
          </List>
        </div>
        <p>
          <span>
            &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://www.creative-tim.com?ref=mdr-footer"
              target="_blank"
            >
              Creative Tim
            </a>
            , made with love for a better web
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
