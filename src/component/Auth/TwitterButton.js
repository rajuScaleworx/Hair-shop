import { Button } from '@mantine/core';
import { TwitterIcon } from '@mantinex/dev-icons';

export function TwitterButton() {
  return (
    <Button
      leftSection={<TwitterIcon style={{ width: '1rem', height: '1rem' }} color="#00ACEE" />}
      variant="default"
    />
  );
}