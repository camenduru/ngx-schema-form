import { Validator } from '../../model/validator';
import {ISchema} from '../../model/ISchema';

export enum FieldType {
  String = 'string',
  Object = 'object',
  Array = 'array',
  Boolean = 'boolean',
  Integer =  'integer',
  Number = 'number',
}

export type TNullableFieldType = [FieldType.String | FieldType.Number | FieldType.Boolean | FieldType.Integer, 'null']
  | ['null', FieldType.String | FieldType.Number | FieldType.Boolean | FieldType.Integer];

export interface Field {
  name: string;
  required: boolean;
  getSchema(): ISchema;
  getButtons(): any;
  getValidators(): { path: string, validator: Validator }[];
}


