import { useContext } from 'react';
import { Context } from '../Context';
import '../styles/Components/Toggle.scss';

interface ToggleProps {
  status: boolean;
  onClick: () => void;
}

function Toggle(props: ToggleProps) {
  const { darkTheme } = useContext(Context);
  return (
    <div
      className="Toggle"
      onClick={props.onClick}
      style={{ backgroundColor: darkTheme ? '#475ded' : '#141414' }}
    >
      <div
        className="Toggle__Circle"
        style={props.status ? { transform: 'translateX(25px)' } : {}}
      />
    </div>
  );
}

export { Toggle };
