/* eslint-disable no-console */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-unused-vars */

function concat(array:unknown[], ..._args: unknown[]): unknown[] {
  const argValues = Array.prototype.slice.call(arguments, 1);
  return array.slice().concat(argValues);
}

export default concat;
