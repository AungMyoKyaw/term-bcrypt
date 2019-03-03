const { h, Component, Color, Text } = require('ink');
const TextInput = require('ink-text-input');
const HashGen = require('./utilites.js');

class TermBcrypt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plainText: props.text,
      hash: '',
      placeholder: 'Hash will appear when you start writing',
      saltRounds: props.saltRounds
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render(props, state) {
    return h('div', {}, [
      h('br', {}),
      h(Text, { green: true }, 'Plain TEXT > '),
      h(TextInput, {
        value: state.plainText,
        placeholder: state.placeholder,
        onChange: this.handleChange
      }),
      h('br', {}),
      h('br', {}),
      h(Text, { red: true }, 'Hash ------> '),
      h(Text, { red: true }, `${state.hash}`)
    ]);
  }

  handleChange(value) {
    this.setState({
      plainText: value
    });

    this.setState({
      hash: value ? HashGen(value, this.state.saltRounds) : ''
    });
  }

  componentDidMount() {
    this.handleChange(this.state.plainText);
  }
}

module.exports = TermBcrypt;
