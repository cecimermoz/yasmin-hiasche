import { Shadows } from '@mui/material';

/* In order to overwrite the MUI baseShadows it is expected to send a full array 
of 28 positions, otherwise it will fail */

const baseShadows: Shadows = [
  'none',
  '1px 1px 4px 0px rgba(0, 0, 0, 0.15)',
  '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
  '1px 2px 5px 1px rgba(0, 0, 0, 0.15)',
  '0px 6px 10px -1px rgba(0, 0, 0, 0.15)',
  '0px 0px 15px 8px rgba(0, 0, 0, 0.15)',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
  'none',
];

export default baseShadows;
