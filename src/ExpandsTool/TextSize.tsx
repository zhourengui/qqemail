import { useState } from "react";
import { Dropdown } from "../SimpleEditor/components/Toolbar/uikit";
import { EditorSelection } from "../SimpleEditor/selection";

export interface TextSizeProps {
  selection?: EditorSelection;
}

export const TextSize: React.FC<TextSizeProps> = (props) => {
  const { selection } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selection={selection}
      labelFactory={() => <span onClick={() => setIsOpen(true)}>TextSize</span>}
      viewFactory={() => <span>TextSize</span>}
    />
  );
};

TextSize.displayName = "TextSize";