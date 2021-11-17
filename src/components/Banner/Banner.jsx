import {
  Button,
  Paper,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
} from "@material-ui/core";

import BannerLogo from "../../Assets/Images/banner.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <Paper>
        <Card>
          <CardActionArea className="bannerDetails">
            <CardContent>
              <Typography variant="h5" component="h2">
                More practice -
              </Typography>

              <Typography variant="h5" component="h3">
                the more you can
              </Typography>

              <Typography variant="h6" component="p">
                Our classes emphasize individuality in to find our True Selves
                while our community puts people and relationships first
              </Typography>
            </CardContent>
            <CardMedia
              className="cardMedia"
              image={BannerLogo}
              title="Banner of website"
            />
          </CardActionArea>
        </Card>
      </Paper>
    </>
  );
};

export default Banner;
