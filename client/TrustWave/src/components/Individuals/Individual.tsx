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
import {BiDotsHorizontalRounded} from 'react-icons/bi'
import Modal from './Modal';


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

const TextShortener: React.FC<{ text: string; maxWords: number }> = ({ text, maxWords }) => {
  const words = text.split(' ');
  const [showAll, setShowAll] = useState(false);
  const displayText = showAll ? text : words.slice(0, maxWords).join(' ');
  const buttonText = showAll ? 'Show Less' : 'Show More';

  return (
    <div className="border p-4">
      <p>{displayText}</p>
      {words.length > maxWords && (
        <button
          className="text-blue-500 hover:underline"
          onClick={() => setShowAll(!showAll)}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

interface IndividualProps {
  handleConnectWallet: () => void;
}

const Individual: React.FC<IndividualProps> = ({ handleConnectWallet }) => {
  // Use handleConnectWallet when needed
  const handleClick = () => {
    // Call the handleConnectWallet function
    handleConnectWallet();
  };
  const {connectWallet, currentAccount} = useContext(TransactionContext)
  const [expanded, setExpanded] = useState(false);
  const userDescription = ` We're urgently seeking your help to fund a life-saving surgery for our cherished cat, Tom. 
  Tom is facing a critical medical condition, and without this surgery, his future hangs in the balance. 
  Your generous donations will make it possible for Tom to receive the surgery he needs, ensuring a chance at a healthy and happy life. 
  Please contribute today to make a significant difference in Tom' well-being and our family's peace of mind.`


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleConnect = async () => {
    if (connectWallet) {
      // Assuming connectWallet returns a Promise
      try {
        await connectWallet();
        // Now that connectWallet has completed successfully, you can call handleConnectWallet
        handleConnectWallet();
      } catch (error) {
        // Handle any errors that occur during connectWallet
        console.error('Error connecting wallet:', error);
      }
    }
  };

  return (
    <Card
    sx={{
      maxWidth: '600px', // Adjust the maximum width as needed
      backgroundColor: 'rgba(0, 0, 255, 0.05)', // Transparent blue background
      color: 'white', // Set text color to white'
      border: '1px solid white',
    }}
        className='flex flex-col p-5 m-2 cursor-pointer hover:shadow-xl card-bg text-white'
      >
        <div className='md:flex md:flex-row md:space-x-10 w-full'>
          <div className="text-white flex flex-row">
            <img
              src={Person}
              alt="Individual"
              className="w-36 h-36 rounded-lg"
            />
          </div>
          <div className="flex flex-row space-x-20 items-center">
            <div className="text-white whitespace-nowrap">
              <h2 className="text-xl font-bold">Tom the Cat</h2>
              <p>Springfield, MO</p>
            </div>
            <div className="text-white absolute top-0 right-0 p-3">
              <IconButton aria-label="settings" className="text-white">
                <BiDotsHorizontalRounded className='text-white' size={25}/> 
              </IconButton>
            </div>
          </div>
      </div>
   
      <CardContent>
        <Typography variant="body2" className='text-white'>
          <TextShortener text={userDescription} maxWords={35} />
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
          <RiArrowDropDownLine className='text-white' size={30} />
        </ExpandMore>
        </div> 
      <div>
        {currentAccount ? 
      <button aria-label="share" onClick={() => handleClick()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Send Donation
      </button>
      :
      <button aria-label="share" onClick={() => handleConnect()}>
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

export default Individual