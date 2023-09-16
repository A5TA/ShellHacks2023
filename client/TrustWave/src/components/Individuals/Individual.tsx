import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import{RiArrowDropDownLine} from 'react-icons/ri';
import { useState, useContext } from 'react';
import Person from '../../assets/TomBegging.png'
import { TransactionContext } from '../../context/TranscationContext';
import {BiDotsHorizontalRounded} from 'react-icons/bi'


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
  handleConnectWallet: any;
  address: string;
  message: string;
  description: string;
  homeAddress: string;
  name: string;
}

const Individual: React.FC<IndividualProps> = ({ handleConnectWallet, address, message, description, homeAddress, name }) => {
  const {setFormData} = useContext(TransactionContext)
  // Use handleConnectWallet when needed
  const handleClick = () => {
    // Call the handleConnectWallet function
    setFormData((prevState: any) => ({
      ...prevState,
      addressTo: address,
    }))
    handleConnectWallet(address);
  };
  const {connectWallet, currentAccount} = useContext(TransactionContext)
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleConnect = async () => {
    if (connectWallet) {
      // Assuming connectWallet returns a Promise
      try {
        await connectWallet();
        // Now that connectWallet has completed successfully, you can call handleConnectWallet
        setFormData((prevState: any) => ({
          ...prevState,
          addressTo: address,
        }))
        handleConnectWallet(address);
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
              <h2 className="text-xl font-bold">{name}</h2>
              <p>{homeAddress}</p>
            </div>
            <div className="text-white absolute top-0 right-0 p-3">
              <IconButton aria-label="settings" className="text-white">
                <BiDotsHorizontalRounded className='text-white' size={25}/> 
              </IconButton>
            </div>
          </div>
      </div>
   
      <CardContent>
        <Typography component={'span'} className='text-white'>
          <TextShortener text={message} maxWords={35} />
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
      <button aria-label="share" onClick={() => handleConnect()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Connect Wallet
      </button>
      }
      </div>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Individual