import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save"

function App() {
  return (
    <div className="App">
      <Button variant="contained" size="large" startIcon={<SaveIcon />}>
        Save
      </Button>
    </div>
  );
}

export default App;
