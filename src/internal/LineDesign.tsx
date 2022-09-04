import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

type LineProps = {
  angle?: string;
  offset?: string;
  color?: string;
};

const Line = ({ angle = '0deg', offset = '0px, 0px', color }: LineProps) => {
  return (
    <Box
      css={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 'calc(200vw + 200vh)',
        height: '1px',
        transform: `translate(${offset}) rotate(${angle}) translate(-50%, -50%)`,
        transformOrigin: 'top left',
        backgroundColor: color,
      }}
    />
  );
};

export const LineDesign = () => {
  return (
    <>
      <Box
        css={{
          zIndex: '$1',
          pointerEvents: 'none',
          width: '3em',
          height: '3em',
          position: 'fixed',
          top: 110,
          left: '73%',

          '@bp1': {
            top: 60,
            left: '50%',
            right: 'auto',
            transform: 'translateX(1.25em)',
          },
          '@bp2': {
            position: 'absolute',
            top: 0,
            transform: 'none',
          },
        }}
      >
        <Line color="$pink5" angle="0deg" offset="0, 0.467em" />
        <Line color="$pink5" angle="0deg" offset="0, 0.533em" />

        <Line color="$pink5" angle="45deg" offset="-0.288em, 0" />
        <Line color="$pink5" angle="45deg" offset="-0.288em, 0.090em" />

        <Line color="$pink5" angle="-45deg" offset="0.622em, 0" />
        <Line color="$pink5" angle="-45deg" offset="0.622em, 0.090em" />

        <Line color="$pink5" angle="45deg" offset="0.242em, 0" />
        <Line color="$pink5" angle="-45deg" offset="0.242em, 1em" />

        <Line color="$mint5" angle="0deg" offset="0, 0" />
        <Line color="$mint5" angle="0deg" offset="0, 1em" />

        <Line color="$mint5" angle="90deg" offset="0, 0" />
        <Line color="$mint5" angle="90deg" offset="1em, 0" />
        <Text
          size="2"
          css={{
            fontWeight: 'normal',
            textAlign: 'center',
            letterSpacing: '-0.03rem',
            lineHeight: '32px',
          }}
        >
          ATELIER®
        </Text>
        <ArrowLeftIcon style={{ position: 'relative', width: '1em', height: '1em' }} />
      </Box>
    </>
  );
};
