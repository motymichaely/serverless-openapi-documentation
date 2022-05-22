import type { Event, Http, HttpApiEvent } from 'serverless/aws';

export interface IModel {
  name: string;
  description?: string;
  contentType: string;
  schema?: object | any[];
  tsSchema?: {
    filePath: string;
    typeName: string;
  };
  examples?: any[];
}

export interface IDefinitionConfig {
  title: string;
  description: string;
  version?: string;
  servers?: IServer[];
  models: IModel[];
  security?: ISecurity[];
}

export interface ISecurity {
  name: string;
  type: 'apiKey' | 'http' | 'oauth2' | 'openIdConnect';
  scheme?: string;
  in?: 'query' | 'header' | 'cookie';
  authorizerName?: string;
}

export interface IDefinitionType {
  file: string;
  format: 'yaml' | 'json';
  indent: number;
}

export interface IServerlessFunctionConfig {
  _functionName: string;
  handler?: string;
  description?: string;
  environment?: object;
  events?: IServerlessFunctionEvent[];
}

export interface Param {
  allowEmptyValue?: boolean;
  allowReserved?: boolean;
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  description?: string;
  required?: boolean;
  style?: 'form' | 'simple';
  explode?: boolean;
  deprecated?: boolean;
  schema?: object;
  examples?: any[];
  content?: any;
}
export interface IEventDocumentation {
  summary: string;
  operationId?: string;
  security?: string[];
  description?: string;
  tags?: string[];
  deprecated?: boolean;
  requestModels?: any;
  queryParams?: Param[];
  pathParams?: Param[];
  requestHeaders?: Param[];
  cookieParams?: Param[];
  requestBody?: {
    description?: string;
  };
  methodResponses: {
    statusCode: number;
    responseBody?: {
      description?: string;
    };
    responseHeaders?: {
      name: string;
      description: string;
      schema: object;
    }[];
    responseModels: {
      [key: string]: string;
    };
  }[];
}

export type OperationConfig = (HttpApiEvent | Http) & { documentation?: IEventDocumentation };

export interface IServerlessFunctionEvent extends Event {
  httpApi?: HttpApiEvent & { documentation?: IEventDocumentation };
  http?: Http & { documentation?: IEventDocumentation };
}

// TODO: We could use another TS based OpenAPI project to get type information
// for OpenAPI definitions.
// @see https://github.com/Mermade/awesome-openapi3#parsersmodelsvalidators

// @see https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#operation-object
export interface IOperation {
  tags?: string[];
  summary?: string;
  description?: string;
  externalDocs?: any;
  operationId?: string;
  parameters?: IParameterConfig[];
  requestBody?: any;
  responses?: any;
  callbacks?: any;
  deprecated?: boolean;
  security?: any[];
  servers?: IServer[];
}

export interface IServer {
  url: string;
  descripition: string;
}

// @see https://github.com/OAI/OpenAPI-Specification/blob/3.0.0/versions/3.0.0.md#parameterObject
export interface IParameterConfig {
  name: string;
  in: 'path' | 'query' | 'header' | 'cookie';
  description: string;
  required?: boolean;
  schema?: object;
  deprecated?: boolean;
  allowEmptyValue?: boolean;
  style?: 'form' | 'simple';
  explode?: boolean;
  allowReserved?: boolean;
  example?: any;
  examples?: any[];
  content?: Map<string, any>;
}

// FIXME:
export interface IDefinition {
  openapi: string;
  info: any;
  servers?: any[];
  paths: any;
  components?: any;
  security?: any[];
  tags?: any[];
  externalDocs: any;
}

export type ILog = (...str: string[]) => void;
