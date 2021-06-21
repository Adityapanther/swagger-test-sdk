/*
 * swagger test
 * swagger client sdk test.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.26
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {InlineResponse400Data} from './InlineResponse400Data';

/**
 * The InlineResponse400 model module.
 * @module model/InlineResponse400
 * @version 1.0.0
 */
export class InlineResponse400 {
  /**
   * Constructs a new <code>InlineResponse400</code>.
   * @alias module:model/InlineResponse400
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse400} obj Optional instance to populate.
   * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse400();
      if (data.hasOwnProperty('statusCode'))
        obj.statusCode = ApiClient.convertToType(data['statusCode'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = InlineResponse400Data.constructFromObject(data['data']);
    }
    return obj;
  }
}

/**
 * @member {Number} statusCode
 * @default 400
 */
InlineResponse400.prototype.statusCode = 400;

/**
 * @member {module:model/InlineResponse400Data} data
 */
InlineResponse400.prototype.data = undefined;
