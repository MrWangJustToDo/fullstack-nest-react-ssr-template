import { Box, Code } from '@chakra-ui/react';
import { useIntl } from 'react-intl';

export default function Index() {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <Box>

        <Code>{f({ id: 'app.title', defaultMessage: 'hello' })}</Code>
        <br />
        <Code>{f({ id: 'home.lead', defaultMessage: 'test' })}</Code>
        <br />
        <Code>{f({ id: 'home.title', defaultMessage: 'title' })}</Code>
        <br />
      </Box>
    </>
  );
}
