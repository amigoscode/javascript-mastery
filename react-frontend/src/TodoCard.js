import { 
    Button,
    Card,
    CardActions,
    CardContent, 
    Typography,
    Chip
} from '@mui/material';

import { Mood as MoodIcon, MoodBad as MoodBadIcon } from '@mui/icons-material';


const TodoCard = ({id, todo, done}) => {
    return (
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
            <Chip 
                color={done ? "success" : "error"} 
                icon={done ? <MoodIcon/> : <MoodBadIcon /> }
                label={`id - ${id}`}/>
          </Typography>
          <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
            {todo}
          </Typography>
        </CardContent>
        <CardActions>
          {!done ? <Button size="small">Mark as done</Button> : null}
        </CardActions>
      </Card>
    );
  }

export default TodoCard;