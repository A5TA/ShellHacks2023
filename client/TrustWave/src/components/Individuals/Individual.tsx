import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import{RiArrowDropDownLine} from 'react-icons/ri';
import { useState, useContext } from 'react';
import Person from '../../assets/TomBegging.png'
import { TransactionContext } from '../../context/TranscationContext';


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const {connectWallet, currentAccount} = useContext(TransactionContext)
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardHeader
        avatar={
            <Avatar alt="Individual" src={Person} sx={{ width: 100, height: 100 }} variant="square"/>
        }
        action={
          <IconButton aria-label="settings">
            Hello
          </IconButton>
        }
        title="Tom the Cat"
        subheader="Springfield, MO"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        We're urgently seeking your help to fund a life-saving surgery for our cherished cat, Tom. 
        Tom is facing a critical medical condition, and without this surgery, his future hangs in the balance. 
        Your generous donations will make it possible for Tom to receive the surgery he needs, ensuring a chance at a healthy and happy life. 
        Please contribute today to make a significant difference in Tom' well-being and our family's peace of mind.
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <RiArrowDropDownLine/>
        </ExpandMore>
        </div> 
      <div>
        {currentAccount ? 
      <button aria-label="share" onClick={() => console.log("sent money")}>
          Send Donation
      </button>
      :
      <button aria-label="share" onClick={connectWallet}>
            Connect Wallet
        </button>
      }
      </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}