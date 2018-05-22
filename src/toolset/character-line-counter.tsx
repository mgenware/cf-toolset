import * as React from 'react';
import CodeEditor from 'common/widgets/codeEditor';

interface State {
  content: string;
}

export default class CharacterLineCounter extends React.Component<object, State> {
  constructor(props: object) {
    super(props);

    this.state = {
      content: '',
    };
  }

  render() {
    const { state } = this;
    return (
      <CodeEditor
        autoFocus={true}
        content={state.content}
        onChange={(s) => this.setState({ content: s })}
        charsCounterDebounceWaitTime={500}
        rows={20}
      />
    );
  }
}
