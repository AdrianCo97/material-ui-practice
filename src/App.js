import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField"

import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"

import "./App.css"



function App() {
  return (
    
    <div className="content">
      <TextField 
        variant="filled"
        type="time"
        label="The time"
      />
      <ButtonGroup>
      <Button variant="contained" size="large" color="primary" startIcon={<SaveIcon />} >
        Save
      </Button>

      <Button variant="contained" size="large" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
