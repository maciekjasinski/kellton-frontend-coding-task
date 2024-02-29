import { MinifigPartType, MinifigType } from '@/types/minifig';

export type Dispatch = (action: Action) => void;

export type Action =
  | {
      type: 'addMinifig';
      minifig: MinifigType;
    }
  | {
      type: 'addMinifigParts';
      parts: MinifigPartType[];
    }
  | {
      type: 'clearCart';
    };

export interface State {
  selectedMinifig:
    | (MinifigType & {
        parts: MinifigPartType[];
      })
    | null;
}

export interface CartContextInterface extends State {
  cartDispatch: Dispatch;
}
