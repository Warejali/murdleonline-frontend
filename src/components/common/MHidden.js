import { Theme, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

// ----------------------------------------------------------------------

// type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

// interface MHiddenProps {
//   children: JSX.Element;
//   type: 'up' | 'down';
//   value: Breakpoint;
// }

export const MHidden = ({ type, children, value }) => {
  const hiddenUp = useMediaQuery((theme) =>
    theme.breakpoints.up(value)
  );
  const hiddenDown = useMediaQuery((theme) =>
    theme.breakpoints.down(value)
  );

  if (type === 'down') {
    return hiddenDown ? null : children;
  }

  if (type === 'up') {
    return hiddenUp ? null : children;
  }

  return null;
};
