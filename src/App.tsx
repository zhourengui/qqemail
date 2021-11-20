import { TextSize } from "./ExpandsTool/TextSize";
import SimpleEditor from "./SimpleEditor";

function App() {
  return (
    <div>
      <h1>Rich Text Editor</h1>
      <SimpleEditor content="<strong>默认文本</strong>" expands={[TextSize]} />
    </div>
  );
}

export default App;
