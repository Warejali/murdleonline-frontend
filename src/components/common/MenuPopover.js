import { alpha, Popover, styled } from '@mui/material';

const ArrowStyle = styled('span')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    top: -7,
    zIndex: 1,
    width: 12,
    right: 20,
    height: 12,
    content: "''",
    position: 'absolute',
    borderRadius: '0 0 4px 0',
    transform: 'rotate(-135deg)',
    background: theme.palette.background.neutral,
    borderRight: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
    borderBottom: `solid 1px ${alpha(theme.palette.grey[500], 0.12)}`,
  },
}));

export default function MenuPopover({
  children,
  sx,
  open,
  onClose,
  anchorEL,
  compProps,
}) {
  return (
    <Popover
      open={open}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      anchorEl={anchorEL}
      onClose={onClose}
      PaperProps={{
        sx: {
          mt: 4.5,
          ml: 0.5,
          overflow: 'inherit',
          width: 200,
          ...sx,
        },
      }}
      {...compProps}
    >
      <ArrowStyle className='arrow' />
      {children}
    </Popover>
  );
}
