import { Category } from "../models/common.model";
import { Tool } from "../models/common.model";


export const categories: Category[] = [
    {id: 1, name: 'Text Tools', icon: 'text_format', description: 'Tools for text manipulation and conversion'},
    // {id: 2, name: 'Formatters', icon: 'code', description: 'Format and beautify your code and data' },
    // {id: 3, name: 'Encoders/Decoders', icon: 'lock', description: 'Encode and decode various formats'},
];

export const tools: Tool[] = [
  {
    id: 'newline-to-comma',
    name: 'Newline to Comma',
    description: 'Convert newline-separated text to comma-separated',
    categoryIds: [1],
    route: '/tools/newline-to-comma',
    icon: 'swap_vert'
  },
  // {
  //   id: 'json-formatter',
  //   name: 'JSON Formatter',
  //   description: 'Format and validate JSON data',
  //   categoryIds: [2],
  //   route: '/tools/json-formatter',
  //   icon: 'data_object'
  // },
  // {
  //   id: 'csv-to-json',
  //   name: 'CSV to JSON',
  //   description: 'Convert CSV data to JSON format',
  //   categoryIds: [1],
  //   route: '/tools/csv-to-json',
  //   icon: 'table_chart'
  // },
  // {
  //   id: 'case-converter',
  //   name: 'Case Converter',
  //   description: 'Convert text between different cases',
  //   categoryIds: [1],
  //   route: '/tools/case-converter',
  //   icon: 'text_fields'
  // },
];
