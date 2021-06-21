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
import {ApiClient} from './ApiClient';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse2001Data} from './model/InlineResponse2001Data';
import {InlineResponse2001DataData} from './model/InlineResponse2001DataData';
import {InlineResponse2001DataDataPageList} from './model/InlineResponse2001DataDataPageList';
import {InlineResponse200Data} from './model/InlineResponse200Data';
import {UserApi} from './api/UserApi';

/**
* swagger_client_sdk_test_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var SwaggerTest = require('index'); // See note below*.
* var xxxSvc = new SwaggerTest.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new SwaggerTest.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new SwaggerTest.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new SwaggerTest.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse2001Data model constructor.
     * @property {module:model/InlineResponse2001Data}
     */
    InlineResponse2001Data,

    /**
     * The InlineResponse2001DataData model constructor.
     * @property {module:model/InlineResponse2001DataData}
     */
    InlineResponse2001DataData,

    /**
     * The InlineResponse2001DataDataPageList model constructor.
     * @property {module:model/InlineResponse2001DataDataPageList}
     */
    InlineResponse2001DataDataPageList,

    /**
     * The InlineResponse200Data model constructor.
     * @property {module:model/InlineResponse200Data}
     */
    InlineResponse200Data,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};