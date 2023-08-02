import { v4 as uuidv4 } from 'uuid';

export function MakeTimedIDUnique(): string {
  return uuidv4();
}
