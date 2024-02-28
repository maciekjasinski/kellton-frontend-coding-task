import { MinifigCardProps } from '@/components/common/MinifigCard/MinifigCard.interface';

export type Dispatch = (action: Action) => void;

export type Action =
  | {
      type: 'addToCart';
      minifig: MinifigCardProps;
    }
  | {
      type: 'clearCart';
    };

export interface State {
  selectedMinifig: (MinifigCardProps & {
    parts: any
  }) | null;
}

export interface CartContextInterface extends State {
  cartDispatch: Dispatch;
}
