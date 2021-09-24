import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup"
import SaveIcon from "@material-ui/icons/Save"
import DeleteIcon from "@material-ui/icons/Delete"


function App() {
  return (
    <div className="App">
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
