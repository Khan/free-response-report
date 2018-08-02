import React from 'react';
import ReactDOM from 'react-dom';
import Document from './Document';
import registerServiceWorker from './utils/registerServiceWorker';
import './styles.css';

const webpackRequireContext = require.context('!raw-loader!../public', false, /\.idyll$/,)

const documents = webpackRequireContext
    .keys()
    .reduce((map, fileName) => {
        const markdown = webpackRequireContext(fileName)
        // remove the leading './'
        if (fileName.startsWith('./')) {
            fileName = fileName.substr(2)
        }

        return map.set(fileName, markdown);
    }, new Map())

ReactDOM.render(
    <Document documents={documents}/>, document.getElementById('idyll-mount'));
registerServiceWorker();