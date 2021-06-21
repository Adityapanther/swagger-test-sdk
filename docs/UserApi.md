# SwaggerTest.UserApi

All URIs are relative to *http://127.0.0.1:4040*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authGet**](UserApi.md#authGet) | **GET** /auth | login or auth user to our server
[**pageListGet**](UserApi.md#pageListGet) | **GET** /pageList | get user page List

<a name="authGet"></a>
# **authGet**
> InlineResponse200 authGet(opts)

login or auth user to our server

### Example
```javascript
import {SwaggerTest} from 'swagger_test';

let apiInstance = new SwaggerTest.UserApi();
let opts = { 
  'email': "email_example", // String | 
  'password': "password_example" // String | 
};
apiInstance.authGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | [optional] 
 **password** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="pageListGet"></a>
# **pageListGet**
> InlineResponse2001 pageListGet(opts)

get user page List

### Example
```javascript
import {SwaggerTest} from 'swagger_test';

let apiInstance = new SwaggerTest.UserApi();
let opts = { 
  'authToken': "authToken_example" // String | 
};
apiInstance.pageListGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

