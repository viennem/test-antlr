/* eslint class-methods-use-this: 0 */
import myParserListener from './myParserListener.js';

class MyListener extends myParserListener {
  /**
   * Default constructor.
   *
   * @param {FileInformation} fileInformation - File information.
   * @param {ComponentDefinition[]} [definitions=[]] - All component definitions.
   */
  constructor() {
    super();
  }
}

export default MyListener;
