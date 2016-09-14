import React from 'react';
import AutoSuggestReact from './auto-suggest-react.jsx';

const serviceUri = require('../../../host').core + '/v1/core/uoms';
const empty = {
    unit: ''
}
'use strict';

export default class UomAutoSuggestReact extends React.Component {
    constructor(props) {
        super(props);
        this.componentWillMount = this.componentWillMount.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    }

    getUomSuggestions(text) {
        return fetch(serviceUri).then(results => results.json()).then(json => {
            return json.data.map(uom => {
                uom.toString = function () {
                    return `${this.unit}`;
                }
                return uom;
            })
        })
    }

    componentWillMount() {
        var _options = Object.assign({ suggestions: this.getUomSuggestions }, this.props.options);
        var _value = Object.assign({}, empty, this.props.value);
        _value.toString = function () {
            return this.unit;
        }
        this.setState({ value: _value, options: _options });
    }
    componentWillReceiveProps(props) {
        var _options = Object.assign({ suggestions: this.getUomSuggestions }, props.options);
        var _value = Object.assign({}, empty, props.value);
        _value.toString = function () {
            return this.unit;
        }
        this.setState({ value: _value, options: _options });
    }

    render() {
        return (
            <AutoSuggestReact
                value={this.state.value}
                onChange={this.props.onChange}
                options={this.state.options}
                />
        );
    }
}
