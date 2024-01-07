// place files you want to import through the `$lib` alias in this folder.
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);

export const client = generateClient();