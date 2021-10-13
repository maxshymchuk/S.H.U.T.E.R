import { IElement } from './features';
import { ENTITY_TYPE } from '../../constants';

export interface IEntityConfig extends IElement {
  type: ENTITY_TYPE;
}
